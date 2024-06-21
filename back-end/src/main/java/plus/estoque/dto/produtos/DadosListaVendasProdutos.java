package plus.estoque.dto.produtos;

import jakarta.validation.constraints.NotBlank;
import plus.estoque.domain.produtos.Produto;

import java.time.LocalDateTime;
import java.util.List;

public record DadosListaVendasProdutos(

        @NotBlank
        LocalDateTime dataVenda,
        @NotBlank
        Double valorTotalVenda,
        @NotBlank
        List<Produto> listaProdutos

        ) {
}
