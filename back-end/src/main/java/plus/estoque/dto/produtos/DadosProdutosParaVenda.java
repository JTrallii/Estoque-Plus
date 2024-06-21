package plus.estoque.dto.produtos;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public record DadosProdutosParaVenda(

        @NotNull
        Double precoVenda,
        @NotBlank
        String produto

) {
}
