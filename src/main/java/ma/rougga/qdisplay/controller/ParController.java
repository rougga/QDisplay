package ma.rougga.qdisplay.controller;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import ma.rougga.qdisplay.CPConnection;
import org.slf4j.LoggerFactory;

public class ParController {

    private static final org.slf4j.Logger logger = LoggerFactory.getLogger(ParController.class);

    // Create or Update (Upsert)
    public boolean saveOrUpdatePar(String name, String value) {
        String sql = "INSERT INTO rougga_pars_qdisplay (name, value) VALUES (?, ?) "
                + "ON CONFLICT (name) DO UPDATE SET value = EXCLUDED.value";
        try (Connection con = new CPConnection().getConnection(); PreparedStatement stmt = con.prepareStatement(sql)) {
            stmt.setString(1, name);
            stmt.setString(2, value);
            return stmt.executeUpdate() > 0;
        } catch (Exception e) {
            logger.error(e.getMessage());
            return false;
        }
    }

    // Read by Name
    public String getParByName(String name) {
        String sql = "SELECT value FROM rougga_pars_qdisplay WHERE name = ?";
        try (Connection con = new CPConnection().getConnection(); PreparedStatement stmt = con.prepareStatement(sql)) {
            stmt.setString(1, name);
            ResultSet rs = stmt.executeQuery();
            if (rs.next()) {
                return rs.getString("value");
            }
        } catch (Exception e) {
            logger.error(e.getMessage());
        }
        return null;
    }

    // Read All
    public List<Map<String, String>> getAllPars() {
        List<Map<String, String>> resultList = new ArrayList<>();
        String sql = "SELECT name, value FROM rougga_pars_qdisplay";
        try (Connection con = new CPConnection().getConnection(); PreparedStatement stmt = con.prepareStatement(sql); ResultSet rs = stmt.executeQuery()) {
            while (rs.next()) {
                Map<String, String> row = new HashMap<>();
                row.put("name", rs.getString("name"));
                row.put("value", rs.getString("value"));
                resultList.add(row);
            }
        } catch (Exception e) {
            logger.error(e.getMessage());
        }
        return resultList;
    }
    
    public Map<String, String> getAllParsAsMap() {
        Map<String, String> pars = new HashMap<>();
        String sql = "SELECT name, value FROM rougga_pars_qdisplay";
        try (Connection con = new CPConnection().getConnection(); PreparedStatement stmt = con.prepareStatement(sql); ResultSet rs = stmt.executeQuery()) {
            while (rs.next()) {
                pars.put(rs.getString("name"),rs.getString("value"));
            }
        } catch (Exception e) {
            logger.error(e.getMessage());
        }
        return pars;
    }

    // Delete
    public boolean deletePar(String name) {
        String sql = "DELETE FROM rougga_pars_qdisplay WHERE name = ?";
        try (Connection con = new CPConnection().getConnection(); PreparedStatement stmt = con.prepareStatement(sql)) {
            stmt.setString(1, name);
            return stmt.executeUpdate() > 0;
        } catch (Exception e) {
            logger.error(e.getMessage());
            return false;
        }
    }
}
