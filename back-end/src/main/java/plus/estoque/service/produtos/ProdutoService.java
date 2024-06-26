package plus.estoque.service.produtos;

import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.util.UriComponentsBuilder;
import plus.estoque.domain.produtos.Produto;
import plus.estoque.dto.produtos.DadosCadastroProduto;
import plus.estoque.repository.produtos.ProdutoRepository;

@Service
public class ProdutoService {

    @Autowired
    private ProdutoRepository produtoRepository;

    public Produto cadastrar(@RequestBody @Valid DadosCadastroProduto dados) {
        var produto = new Produto(dados);
        produtoRepository.save(produto);
        return produto;
    }

}
