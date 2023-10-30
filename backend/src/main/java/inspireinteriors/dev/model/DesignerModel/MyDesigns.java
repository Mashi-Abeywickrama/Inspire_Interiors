package inspireinteriors.dev.model.DesignerModel;


import jakarta.persistence.*;
import lombok.*;

@RequiredArgsConstructor
@Getter
@Setter
@ToString

@Table(name = "MyDesigns")
@Entity
public class MyDesigns {
   @Id
   @GeneratedValue
    @Column(name = "Designs_id")
    private int design_id;


   @Column(name = "Designer_id")
   private int designer_id;

   @Column(name = "Design_Name")
    private String name;

   @Column(name = "Description")
   private String description;

   @Column(name = "Image")
   private String image;

    @Column(name = "Image2")
    private String image2;

    @Column(name = "Image3")
    private String image3;




}
