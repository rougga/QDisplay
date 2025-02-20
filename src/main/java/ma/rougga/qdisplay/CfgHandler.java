package ma.rougga.qdisplay;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.logging.Level;
import java.util.logging.Logger;

public class CfgHandler {

    // MetaData
    public static final String APP = "QDisplay";
    public static final String VERSION = "4.0-LITE";
    public static final String COMPANY = "ROUGGA";
    public static final String CLIENT = "NST-Maroc";
    public static final int APP_PORT = 8888;
    public static final String APP_NODE = "QStates";
    public static final int APP_NODE_PORT = 8888;
    public static final String YEAR ="2025" ;

    //API
    public static final String API_ROOT_URL = "/QData/";
    //Objects
    public final static SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");

    //Methods
    public static String getFormatedDateAsString(Date date) {
        SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        if (date != null) {
            return format.format(date);
        } else {
            return null;
        }

    }

    public static Date getFormatedDateAsDate(String date) {
        SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        if (date != null) {
            try {
                return format.parse(date);
            } catch (ParseException ex) {
                Logger.getLogger(CfgHandler.class.getName()).log(Level.SEVERE, null, ex);
                return null;
            }
        } else {
            return null;
        }
    }

    public static String getFormatedTimeFromSeconds(Double Sec) {
        if (Sec == null) {
            Sec = Double.valueOf("0");
        }
        int hours = (int) (Sec / 3600);
        int minutes = (int) ((Sec % 3600) / 60);
        int seconds = (int) (Sec % 60);
        return String.format("%02d:%02d:%02d", hours, minutes, seconds);
    }

    public static String prepareTableJsonUrl(String host, int port, String apiPoint, String date1, String date2) {
        String url = "http://" + host
                + ":" + port
                + "/" + apiPoint
                + "?date1=" + date1
                + "&date2=" + date2;
        return url;
    }

    public static String prepareJsonUrl(String host, int port, String apiPoint) {
        String url = "http://" + host
                + ":" + port
                + "/" + apiPoint;
        return url;
    }

    public CfgHandler(){}
}
