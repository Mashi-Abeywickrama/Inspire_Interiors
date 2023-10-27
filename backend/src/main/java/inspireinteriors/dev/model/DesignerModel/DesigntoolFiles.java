package inspireinteriors.dev.model.DesignerModel;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity

public class DesigntoolFiles {
    @Id
    @GeneratedValue
    private int id;

    private int designer_id;


    @Column(length = 100000)
    private String Data;

    private int request_id;

    // Constructors


    public DesigntoolFiles(int id, int designer_id, String data, int request_id) {
        this.id = id;
        this.designer_id = designer_id;
        Data = data;
        this.request_id = request_id;
    }

    public DesigntoolFiles() {
    }

    //Getters and Setters


    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getDesigner_id() {
        return designer_id;
    }

    public void setDesigner_id(int designer_id) {
        this.designer_id = designer_id;
    }

    public String getData() {
        return Data;
    }

    public void setData(String data) {
        Data = data;
    }

    public void setRequest_id(int request_id) {
        this.request_id = request_id;
    }
    public void setRequestDesigner_id(int request_id, int designer_id) {
        this.request_id = request_id;
        this.designer_id = designer_id;
    }
    public int getRequest_id() {
        return request_id;
    }

    //ToString


    @Override
    public String toString() {
        return "DesigntoolFiles{" +
                "id=" + id +
                ", designer_id=" + designer_id +
                ", Data='" + Data + '\'' +
                ", Request_id='" + request_id + '\'' +
                '}';
    }
}
