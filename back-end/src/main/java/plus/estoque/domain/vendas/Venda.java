package plus.estoque.domain.vendas;


import jakarta.persistence.*;
import lombok.*;
import plus.estoque.domain.produtos.Produto;
import plus.estoque.domain.vendas.enums.FormaPagamento;
import java.time.LocalDateTime;
import java.util.List;


@Table(name = "vendas")
@Entity(name = "Venda")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
public class Venda {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private LocalDateTime dataVenda;
    private Double valorTotalVenda;
    private Double quantidadeItem;


    @OneToMany(mappedBy = "venda", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Produto> produto;


    @Enumerated(EnumType.STRING)
    private FormaPagamento formaPagamento;



}


























