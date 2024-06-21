package plus.estoque.domain.fornecedor;

import jakarta.persistence.*;
import lombok.*;
import plus.estoque.domain.endereco.Endereco;

@Table(name = "fornecedores")
@Entity(name = "Fornecedor")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
@Embeddable
public class Fornecedor {

        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long id;
        private String fornecedor;
        private String nomeFantasia;
        private String cnpj;
        private String telefone;
        private String celular;
        private String email;

        @Embedded
        private Endereco endereco;
}
