package inspireinteriors.dev.model.DesignerModel;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Table(name = "CustomerRequests")
@Entity

public class CustomerRequests {
    //Attributes
    @Id
    @GeneratedValue

    private int request_id;
    private int customer_id;
    private int designer_id;
    private int status;
    private String description;
    private String images;
    private String dimensions;
    private String budget;
    private String note;

    //Constructors

    public CustomerRequests(int request_id, int customer_id, int designer_id, int status, String description, String images, String dimensions, String budget, String note) {
        this.request_id = request_id;
        this.customer_id = customer_id;
        this.designer_id = designer_id;
        this.status = status;
        this.description = description;
        this.images = images;
        this.dimensions = dimensions;
        this.budget = budget;
        this.note = note;
    }

    //Getters and Setters

    public int getRequest_id() {
        return request_id;
    }

    public void setRequest_id(int request_id) {
        this.request_id = request_id;
    }

    public int getCustomer_id() {
        return customer_id;
    }

    public void setCustomer_id(int customer_id) {
        this.customer_id = customer_id;
    }

    public int getDesigner_id() {
        return designer_id;
    }

    public void setDesigner_id(int designer_id) {
        this.designer_id = designer_id;
    }

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getImages() {
        return images;
    }

    public void setImages(String images) {
        this.images = images;
    }

    public String getDimensions() {
        return dimensions;
    }

    public void setDimensions(String dimensions) {
        this.dimensions = dimensions;
    }

    public String getBudget() {
        return budget;
    }

    public void setBudget(String budget) {
        this.budget = budget;
    }

    public String getNote() {
        return note;
    }

    public void setNote(String note) {
        this.note = note;
    }

    //ToString

    @Override
    public String toString() {
        return "CustomerRequests{" +
                "request_id=" + request_id +
                ", customer_id=" + customer_id +
                ", designer_id=" + designer_id +
                ", status=" + status +
                ", description='" + description + '\'' +
                ", images='" + images + '\'' +
                ", dimensions='" + dimensions + '\'' +
                ", budget='" + budget + '\'' +
                ", note='" + note + '\'' +
                '}';
    }
}
