package Project.Shop.model;

import lombok.*;

import javax.persistence.*;
import java.math.BigDecimal;

@Entity
@Getter
@Setter
@Builder
@Table(name = "products")
@NoArgsConstructor
@AllArgsConstructor
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @EqualsAndHashCode.Include
    private Long id;

    private String name;

    private String description;

    private Integer count;

    private String filename;

    private BigDecimal price;

    private String genre;

    private String trailer;

    private String platform;

    private String developer;

    private String releaseDate;

    @Override
    public String toString() {
        return "Product{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", description='" + description + '\'' +
                ", count=" + count +
                ", filename='" + filename + '\'' +
                ", price=" + price +
                ", genre='" + genre + '\'' +
                ", trailer='" + trailer + '\'' +
                '}';
    }
}
