package Project.Shop.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;


import java.math.BigDecimal;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "Products")
public class Product {

    @Id
    @Field("_id")
    @JsonIgnore
    private String id;

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

    private String description2;

    private String sysReq;

    private String screenshot1;

    private String screenshot2;

    private String screenshot3;

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
                ", platform='" + platform + '\'' +
                ", developer='" + developer + '\'' +
                ", releaseDate='" + releaseDate + '\'' +
                ", description2='" + description2 + '\'' +
                ", sysReq='" + sysReq + '\'' +
                ", screenshot1='" + screenshot1 + '\'' +
                ", screenshot2='" + screenshot2 + '\'' +
                ", screenshot3='" + screenshot3 + '\'' +
                '}';
    }
}
