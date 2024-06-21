package plus.estoque.domain.produtos;

import jakarta.persistence.*;
import lombok.*;
import plus.estoque.domain.produtos.enums.*;

@Table(name = "produtos")
@Entity(name = "Produto")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
public class Produto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String produto;
    private String codigoBarras;

    @Embedded
    private String fornecedor;

    private String descricao;
    private String marca;
    private String modelo;
    private String sku;
    private Double precoVenda;
    private Double precoCusto;
    private Double qtdEstoque;
    private Double qtdMinimaEstoque;


    @Enumerated(EnumType.STRING)
    private CategoriaProduto categoriaProduto;

    @Enumerated(EnumType.STRING)
    private Material material;

    @Enumerated(EnumType.STRING)
    private UnidadeDimensao unidadeDimensao;

    @Enumerated(EnumType.STRING)
    private UnidadePeso unidadePeso;

    @Enumerated(EnumType.STRING)
    private UnidadeVolume unidadeVolume;

}























