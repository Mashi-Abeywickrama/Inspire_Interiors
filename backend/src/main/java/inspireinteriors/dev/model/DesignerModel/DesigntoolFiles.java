package inspireinteriors.dev.model.DesignerModel;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.*;

import java.time.LocalDate;
import java.util.Date;

@Entity
@RequiredArgsConstructor
@Getter
@Setter
@ToString

public class DesigntoolFiles {
    @Id
    @GeneratedValue
    private int id;

    private int designer_id;


    @Column(length = 100000)
    private String Data;

    private int request_id;

    private LocalDate CreatedOn;

}
