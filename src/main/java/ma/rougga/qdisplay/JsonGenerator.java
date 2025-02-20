package ma.rougga.qdisplay;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.UUID;
import java.util.logging.Level;
import java.util.logging.Logger;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;

public class JsonGenerator {

    private String date1;
    private String date2;

    private final SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");

    public String getFormatedTime(Float Sec) {
        int hours = (int) (Sec / 3600);
        int minutes = (int) ((Sec % 3600) / 60);
        int seconds = (int) (Sec % 60);
        return String.format("%02d:%02d:%02d", hours, minutes, seconds);
    }

    public JSONObject generateSimpleGblTable(String d1, String d2, String[] selectedZonesIds) {
        this.date1 = (d1 == null) ? format.format(new Date()) : d1;
        this.date2 = (d2 == null) ? format.format(new Date()) : d2;
        AgenceController ac = new AgenceController();
        CibleController cc = new CibleController();
        ServiceController sc = new ServiceController();
        ZoneController zc = new ZoneController();
        JSONObject all = new JSONObject();
        JSONArray result = new JSONArray();
        if (selectedZonesIds != null) {
            for (String selectedZonesId : selectedZonesIds) {
                List<Agence> agences = ac.getAgencesByZone(UUID.fromString(selectedZonesId));
                if (agences != null) {
                    for (int i = 0; i < agences.size(); i++) {
                        JSONObject site = new JSONObject();
                        Zone z = zc.getZoneById(UUID.fromString(selectedZonesId));
                        site.put("zone", z == null ? "--" : z.getName());
                        site.put("id_zone", z == null ? "--" : z.getId().toString());
                        site.put("site", agences.get(i).getName());
                        try {
                            Agence a = agences.get(i);

                            JSONArray table2 = new JSONArray();
                            PgConnection con = new PgConnection();
                            String dateCon = " and to_date(to_char(t2.ticket_time,'YYYY-MM-DD'),'YYYY-MM-DD')  BETWEEN TO_DATE('" + date1 + "','YYYY-MM-DD') AND TO_DATE('" + date2 + "','YYYY-MM-DD') and t2.db_id='" + a.getId() + "'";

                            String SQL = "SELECT "
                                    + " g1.BIZ_TYPE_ID,"
                                    + " G1.NAME,"
                                    + " G1.NB_T,"
                                    + " G1.NB_TT, "
                                    + "G1.NB_A,"
                                    + " G1.NB_TL1,"
                                    + " G1.NB_SA,"
                                    + " CASE "
                                    + "WHEN G1.NB_T::numeric = 0::numeric THEN 0::numeric "
                                    + "ELSE CAST((G1.NB_A::numeric / G1.NB_T::numeric) * 100::numeric AS DECIMAL(10,2)) "
                                    + "END AS PERAPT,"
                                    + " CASE"
                                    + " WHEN G1.NB_T::numeric = 0::numeric THEN 0::numeric"
                                    + " ELSE CAST((G1.NB_TL1::numeric / G1.NB_T::numeric) * 100::numeric AS DECIMAL(10,2)) "
                                    + "END AS PERTL1pt,"
                                    + " CASE WHEN G1.NB_T::numeric = 0::numeric THEN 0::numeric "
                                    + "ELSE CAST((G1.NB_SA::numeric / G1.NB_T::numeric) * 100::numeric AS DECIMAL(10,2)) "
                                    + "END AS PERSAPT , "
                                    + "G1.AVGSEC_A, G1.avgsec_T "
                                    + "from "
                                    + "( select "
                                    + "t1.biz_type_id,"
                                    + " b.name, "
                                    + "(SELECT COUNT(*) FROM T_TICKET T2 WHERE T2.BIZ_TYPE_ID = T1.BIZ_TYPE_ID " + dateCon + " ) AS NB_T,"
                                    + " (SELECT COUNT(*) FROM T_TICKET T2 WHERE T2.BIZ_TYPE_ID = T1.BIZ_TYPE_ID AND T2.STATUS = 4 " + dateCon + " ) AS NB_TT,"
                                    + " (SELECT COUNT(*) FROM T_TICKET T2 WHERE T2.BIZ_TYPE_ID = T1.BIZ_TYPE_ID AND T2.STATUS = 2 " + dateCon + " ) AS NB_A,"
                                    + " (SELECT COUNT(*) FROM T_TICKET T2 WHERE T2.BIZ_TYPE_ID = T1.BIZ_TYPE_ID AND DATE_PART('epoch'::text, T2.FINISH_TIME - T2.START_TIME)::numeric / 60::numeric <= 1 AND T2.STATUS = 4 " + dateCon + " ) AS NB_TL1,"
                                    + " (SELECT COUNT(*) FROM T_TICKET T2 WHERE T2.BIZ_TYPE_ID = T1.BIZ_TYPE_ID AND T2.STATUS = 0 " + dateCon + " ) AS NB_SA,"
                                    + " (SELECT AVG(DATE_PART('epoch'::text, T2.CALL_TIME - T2.TICKET_TIME)::numeric) FROM T_TICKET T2 WHERE T2.BIZ_TYPE_ID = T1.BIZ_TYPE_ID and T2.call_time is not null  " + dateCon + " ) AS AVGSEC_A, "
                                    + " (SELECT AVG(DATE_PART('epoch'::text, T2.FINISH_TIME - T2.START_TIME)::numeric) FROM T_TICKET T2 WHERE T2.BIZ_TYPE_ID = T1.BIZ_TYPE_ID AND T2.STATUS = 4 " + dateCon + " ) AS AVGSEC_T FROM T_TICKET T1, T_BIZ_TYPE B WHERE T1.BIZ_TYPE_ID = B.ID  and b.db_id='" + a.getId() + "' and t1.db_id='" + a.getId() + "' AND TO_DATE(TO_CHAR(T1.TICKET_TIME,'YYYY-MM-DD'),'YYYY-MM-DD') BETWEEN TO_DATE('" + date1 + "','YYYY-MM-DD') AND TO_DATE('" + date2 + "','YYYY-MM-DD') GROUP BY T1.BIZ_TYPE_ID, B.NAME ) G1 ;";

                            ResultSet r = con.getStatement().executeQuery(SQL);
                            while (r.next()) {
                                JSONObject service = new JSONObject();
                                JSONArray data = new JSONArray();
                                String id = r.getString("biz_type_id");
                                service.put("service", r.getString("name"));
                                data.add(r.getLong("nb_t"));
                                data.add(r.getLong("nb_tt"));
                                data.add(r.getLong("nb_a"));
                                data.add(r.getLong("nb_tl1"));
                                data.add(r.getLong("nb_sa"));
                                data.add(r.getFloat("perApT"));
                                data.add(r.getFloat("PERTL1pt"));
                                data.add(r.getFloat("perSApT"));
                                data.add(getFormatedTime(r.getFloat("avgSec_A")));

                                String cibleSQL = "SELECT G1.BIZ_TYPE_ID, "
                                        + "G1.NAME, "
                                        + "G1.NB_TT, "
                                        + "G1.NB_CA, "
                                        + "CASE "
                                        + "WHEN G1.NB_TT::numeric = 0 "
                                        + "OR G1.NB_CA::numeric = 0 THEN 0 "
                                        + "ELSE CAST((G1.NB_CA::numeric / G1.NB_TT::numeric) * 100::numeric AS DECIMAL(10,2)) "
                                        + "END AS PERCAPT, "
                                        + "G1.NB_CT, "
                                        + "CASE "
                                        + "WHEN G1.NB_TT::numeric = 0 "
                                        + "OR G1.NB_CT::numeric = 0 THEN 0 "
                                        + "ELSE CAST((G1.NB_CT::numeric / G1.NB_TT::numeric) * 100::numeric AS DECIMAL(10,2)) "
                                        + "END AS PERCTPT "
                                        + "FROM "
                                        + "(SELECT B.NAME, "
                                        + "T1.BIZ_TYPE_ID, "
                                        + "(SELECT COUNT(*) "
                                        + "FROM T_TICKET T2 "
                                        + "WHERE T2.BIZ_TYPE_ID = T1.BIZ_TYPE_ID "
                                        + "AND T2.STATUS = 4  " + dateCon + " ) AS NB_TT, "
                                        + " "
                                        + "(SELECT COUNT(*) "
                                        + "FROM T_TICKET T2 "
                                        + "WHERE T2.BIZ_TYPE_ID = T1.BIZ_TYPE_ID "
                                        + "AND DATE_PART('epoch'::text, T2.CALL_TIME - T2.TICKET_TIME)::numeric >  " + cc.getOne(id, a.getId()).getCibleA() + " "
                                        + "AND T2.STATUS = 4  " + dateCon + " ) AS NB_CA, "
                                        + " "
                                        + "(SELECT COUNT(*) "
                                        + "FROM T_TICKET T2 "
                                        + "WHERE T2.BIZ_TYPE_ID = T1.BIZ_TYPE_ID "
                                        + "AND DATE_PART('epoch'::text, T2.FINISH_TIME - T2.START_TIME)::numeric >  " + cc.getOne(id, a.getId()).getCibleT() + " "
                                        + "AND T2.STATUS = 4  " + dateCon + ") AS NB_CT "
                                        + "FROM T_TICKET T1, "
                                        + "T_BIZ_TYPE B "
                                        + "WHERE T1.BIZ_TYPE_ID = B.ID "
                                        + " AND TO_DATE(TO_CHAR(T1.TICKET_TIME,'YYYY-MM-DD'),'YYYY-MM-DD') BETWEEN TO_DATE('" + date1 + "','YYYY-MM-DD') AND TO_DATE('" + date2 + "','YYYY-MM-DD') "
                                        + "AND T1.BIZ_TYPE_ID = '" + id + "' and t1.db_id='" + a.getId() + "' and b.db_id='" + a.getId() + "'"
                                        + "GROUP BY T1.BIZ_TYPE_ID, "
                                        + "B.NAME) G1 ; "
                                        + "";
                                ResultSet cib = con.getStatement().executeQuery(cibleSQL);
                                if (cib.next()) {
                                    data.add(cib.getLong("nb_ca") + "");
                                    data.add(cib.getFloat("percapt") + "%");
                                    data.add(getFormatedTime(r.getFloat("avgSec_T")));
                                    data.add(cib.getLong("nb_ct") + "");
                                    data.add(cib.getFloat("perctpt") + "%");
                                } else {
                                    data.add("--");
                                    data.add("--%");
                                    data.add(getFormatedTime(r.getFloat("avgSec_T")));
                                    data.add("--");
                                    data.add("-%");
                                }
                                data.add(sc.getTodayWaitingTicketsByService(id, agences.get(i).getId()));
                                service.put("data", data);
                                table2.add(service);
                            }

                            site.put("isOnline", ac.isOnline(a.getId()));
                            site.put("table", table2);
                            result.add(site);
                            con.closeConnection();

                        } catch (Exception ex) {
                            Logger.getLogger(TableGenerator.class.getName()).log(Level.SEVERE, null, ex);
                        }
                    }

                }
            }
            all.put("result", result);
        } else {
        }

        return all;
    }

    public JSONObject getAgencesJson() {
        AgenceController ac = new AgenceController();
        List<Agence> agences = ac.getAllAgence();
        JSONObject all = new JSONObject();
        JSONArray result = new JSONArray();
        if (agences != null) {
            for (int i = 0; i < agences.size(); i++) {
                JSONObject agenceO = new JSONObject();
                agenceO.put("id", agences.get(i).getId().toString());
                agenceO.put("name", agences.get(i).getName());
                agenceO.put("isOnline", ac.isOnline(agences.get(i).getId()));
                agenceO.put("lastUpdate", ac.getLastUpdate(agences.get(i).getId()).toString());
                result.add(agenceO);
            }
            all.put("result", result);
        }
        return all;
    }

    public JSONObject getZonesJson() {
        JSONObject all = new JSONObject();
        JSONArray result = new JSONArray();
        try {
            ma.rougga.nst.controller.central.ZoneController zc = new ma.rougga.nst.controller.central.ZoneController(new PgConnection().getStatement());
            List<Zone> zones = zc.getAllZones();

            if (zones != null) {
                for (int i = 0; i < zones.size(); i++) {
                    JSONObject zone = new JSONObject();
                    zone.put("id", zones.get(i).getId().toString());
                    zone.put("name", zones.get(i).getName());
                    zone.put("city", zones.get(i).getCity());
                    zone.put("code", zones.get(i).getCode());
                    result.add(zone);
                }
                all.put("result", result);
            }
        } catch (ClassNotFoundException | SQLException ex) {
            Logger.getLogger(JsonGenerator.class.getName()).log(Level.SEVERE, null, ex);
        }
        return all;
    }
}
