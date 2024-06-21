package plus.estoque.domain.vendas;


import jakarta.persistence.*;
import jakarta.validation.Valid;
import lombok.*;
import plus.estoque.domain.produtos.Produto;
import plus.estoque.domain.vendas.enums.FormaPagamento;
import plus.estoque.dto.produtos.DadosProdutosParaVenda;

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
    @Valid
    private List<DadosProdutosParaVenda> produto;


    @Enumerated(EnumType.STRING)
    private FormaPagamento formaPagamento;



}
