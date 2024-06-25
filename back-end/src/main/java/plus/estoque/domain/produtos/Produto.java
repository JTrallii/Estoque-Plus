package plus.estoque.domain.produtos;

import jakarta.persistence.*;
import lombok.*;
import plus.estoque.domain.fornecedor.Fornecedor;
import plus.estoque.domain.produtos.enums.*;
import plus.estoque.domain.vendas.Venda;

import java.math.BigDecimal;

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

    @Column(nullable = false)
    private String produto;

    @Column(nullable = false, unique = true)
    private String codigoBarras;

    @ManyToOne
    @JoinColumn(name = "fornecedor_id")
    private Fornecedor fornecedor;

    @Column(nullable = false)
    private String descricao;

    private String marca;
    private String modelo;
    private String sku;

    @Column(nullable = false)
    private BigDecimal precoVenda;

    @Column(nullable = false)
    private BigDecimal precoCusto;

    @Column(nullable = false)
    private Double qtdEstoque;

    @Column(nullable = false)
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























