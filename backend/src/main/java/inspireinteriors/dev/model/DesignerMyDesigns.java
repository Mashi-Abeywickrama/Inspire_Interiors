package inspireinteriors.dev.model;


import jakarta.persistence.*;

@Table(name = "DesignerMyDesigns")
@Entity
public class DesignerMyDesigns {
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


   //constructors


    public DesignerMyDesigns(int design_id, int designer_id, String name, String description, String image) {
        this.design_id = design_id;
        this.designer_id = designer_id;
        this.name = name;
        this.description = description;
        this.image = image;
    }

    public DesignerMyDesigns() {

    }

    @Override
    public String toString() {
        return "DesignerMyDesigns{" +
                "design_id=" + design_id +
                ", designer_id=" + designer_id +
                ", name=" + name +
                ", description=" + description +
                ", image=" + image +
                '}';
    }

    //getters

    public int getDesign_id() {
        return design_id;
    }

    public int getDesigner_id() {
        return designer_id;
    }

    public String getName() {
        return name;
    }

    public String getDescription() {
        return description;
    }

    public String getImage() {
        return image;
    }

    //setters

    public void setDesign_id(int design_id) {
        this.design_id = design_id;
    }

    public void setDesigner_id(int designer_id) {
        this.designer_id = designer_id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setImage(String image) {
        this.image = image;
    }
}
