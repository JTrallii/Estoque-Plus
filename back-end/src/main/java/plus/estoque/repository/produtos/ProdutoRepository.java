package plus.estoque.repository.produtos;

import org.springframework.data.jpa.repository.JpaRepository;
import plus.estoque.domain.produtos.Produto;

public interface ProdutoRepository extends JpaRepository<Produto, Long> {
}
