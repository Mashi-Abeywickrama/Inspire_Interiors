package inspireinteriors.dev.model.DesignerModel;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@Table(name = "CustomerRequests")
@Entity
@RequiredArgsConstructor
@Getter
@Setter

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

    private String width;
    private String length;
    private LocalDate RequestedOn;
    private String RoomType;
    private String Amount;


}
