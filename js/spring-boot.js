// ESTRUTURA DE DADOS: Categorias -> SubCards -> Conteúdo
// Spring Boot 3 - Do Básico ao Avançado
const springData = {
    categorias: [
        {
            id: "basico",
            nome: "🍃 SPRING BOOT BÁSICO",
            icone: "📖",
            descricao: "O que é, instalação, estrutura, anotações e primeiros passos",
            progresso: 0,
            subCards: [
                {
                    id: "o-que-e",
                    nome: "O que é Spring Boot",
                    icone: "🎯",
                    descricao: "Conceitos, vantagens e diferença do Spring tradicional",
                    conteudo: {
                        explicacao: "Spring Boot é um framework que <strong>simplifica</strong> o desenvolvimento de aplicações Spring, eliminando grande parte da configuração manual. Ele cria aplicações <strong>standalone</strong> com mínima configuração.",
                        codigo: `# 🎯 O QUE É SPRING BOOT?

# ✅ CARACTERÍSTICAS PRINCIPAIS
# - Configuração automática (Auto-Configuration)
# - Aplicações standalone (executa com java -jar)
# - Servidor embutido (Tomcat, Jetty, Undertow)
# - Produção pronta (métricas, health checks, etc)
# - Sem necessidade de XML (só anotações)

# ⚡ VANTAGENS
# ✅ Desenvolvimento RÁPIDO
# ✅ Menos código boilerplate
# ✅ Fácil integração com bancos de dados
# ✅ Microservices ready
# ✅ Grande ecossistema

# 🔄 SPRING vs SPRING BOOT
# SPRING:            | SPRING BOOT:
# - Configuração XML | - Auto-configuração
# - Servidor externo | - Servidor embutido
# - Muita boilerplate| - Mínimo código
# - Complexo        | - Simples

# 🚀 COMO FUNCIONA?
# 1. Spring Boot Application
# 2. Auto-Configuration (Spring.factories)
# 3. Starter Dependencies
# 4. Embedded Server
# 5. Production-ready Features

# 📝 EXEMPLO MÍNIMO
@SpringBootApplication
public class Application {
    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}`,
                        dica: "💡 Spring Boot AUTOMATIZA tudo! Menos código, mais produtividade. É o padrão da indústria para microservices."
                    }
                },
                {
                    id: "primeiro-projeto",
                    nome: "Criando o Primeiro Projeto",
                    icone: "🚀",
                    descricao: "Spring Initializr, estrutura, pom.xml e primeiro endpoint",
                    conteudo: {
                        explicacao: "Crie seu primeiro projeto Spring Boot usando o Spring Initializr. Escolha as dependências e comece a codar!",
                        codigo: `# 🚀 SPRING INITIALIZR
# Acesse: https://start.spring.io

# 📋 CONFIGURAÇÃO
# Project: Maven
# Language: Java
# Spring Boot: 3.2.0
# Group: com.exemplo
# Artifact: minha-api
# Name: minha-api
# Package name: com.exemplo.minhaapi
# Packaging: Jar
# Java: 17

# 📦 DEPENDÊNCIAS ESSENCIAIS
# ✅ Spring Web (REST APIs)
# ✅ Spring Data JPA (Banco de dados)
# ✅ Spring Boot DevTools (Hot reload)
# ✅ PostgreSQL Driver (ou outro banco)
# ✅ Lombok (Menos código boilerplate)

# 📂 ESTRUTURA DO PROJETO
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   └── com/exemplo/minhaapi/
│   │   │       ├── MinhaApiApplication.java
│   │   │       ├── controller/
│   │   │       ├── service/
│   │   │       ├── repository/
│   │   │       └── model/
│   │   └── resources/
│   │       ├── application.properties
│   │       └── static/
│   └── test/
└── pom.xml

# 📝 APPLICATION.JAVA
package com.exemplo.minhaapi;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class MinhaApiApplication {
    public static void main(String[] args) {
        SpringApplication.run(MinhaApiApplication.class, args);
    }
}

# 🏃 EXECUTANDO
./mvnw spring-boot:run    # Linux/Mac
mvnw spring-boot:run      # Windows

# 📦 GERANDO JAR
./mvnw clean package       # Gera o .jar
java -jar target/minha-api-0.0.1-SNAPSHOT.jar  # Roda`,
                        dica: "🔥 SEMPRE use o Spring Initializr! Ele gera a estrutura correta e gerencia dependências. É o jeito padrão de começar."
                    }
                },
                {
                    id: "anotacoes",
                    nome: "Anotações Essenciais",
                    icone: "🏷️",
                    descricao: "@SpringBootApplication, @RestController, @Autowired, @Component",
                    conteudo: {
                        explicacao: "Anotações são o coração do Spring Boot. Elas substituem configurações XML.",
                        codigo: `# 🏷️ ANOTAÇÕES ESSENCIAIS

# 📌 @SpringBootApplication
# Combina @Configuration + @EnableAutoConfiguration + @ComponentScan
@SpringBootApplication
public class Application {}

# 📌 @RestController
# Combina @Controller + @ResponseBody (API REST)
@RestController
public class HelloController {
    @GetMapping("/hello")
    public String hello() {
        return "Olá, Hamilton!";
    }
}

# 📌 @RequestMapping
# Mapeia requisições HTTP
@RequestMapping("/api")
public class ApiController {}

# 📌 @GetMapping, @PostMapping, @PutMapping, @DeleteMapping
@GetMapping("/users")      // GET /users
@PostMapping("/users")     // POST /users
@PutMapping("/users/{id}") // PUT /users/1
@DeleteMapping("/users/{id}") // DELETE /users/1

# 📌 @Autowired (Injeção de Dependência)
@Service
public class UserService {
    @Autowired
    private UserRepository repository;
}

# 📌 @Component (Bean genérico)
@Component
public class MeuComponente {}

# 📌 @Service (Camada de serviço)
@Service
public class UserService {}

# 📌 @Repository (Camada de dados)
@Repository
public interface UserRepository extends JpaRepository<User, Long> {}

# 📌 @Configuration (Configurações)
@Configuration
public class AppConfig {}

# 📌 @Value (Injetar valores do properties)
@Value("\${app.name}")
private String appName;

# 📌 @ConfigurationProperties (Mapear properties)
@ConfigurationProperties(prefix = "app")
@Component
public class AppProperties {
    private String name;
    private String version;
}`,
                        dica: "🔥 @SpringBootApplication = 3 anotações em 1! @Autowired é a base da Injeção de Dependência."
                    }
                },
                {
                    id: "application-properties",
                    nome: "Application Properties",
                    icone: "⚙️",
                    descricao: "application.properties, application.yml e configurações",
                    conteudo: {
                        explicacao: "O arquivo application.properties (ou .yml) é onde você configura sua aplicação Spring Boot.",
                        codigo: `# ⚙️ APPLICATION.PROPERTIES

# 🚀 SERVIDOR
server.port=8080
server.servlet.context-path=/api
server.address=0.0.0.0

# 📊 LOGGING
logging.level.root=INFO
logging.level.com.exemplo=DEBUG
logging.file.name=app.log
logging.pattern.console=%d{yyyy-MM-dd HH:mm:ss} - %msg%n

# 🗄️ BANCO DE DADOS (PostgreSQL)
spring.datasource.url=jdbc:postgresql://localhost:5432/meu_banco
spring.datasource.username=usuario
spring.datasource.password=senha
spring.datasource.driver-class-name=org.postgresql.Driver

# 🛢️ JPA/HIBERNATE
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.PostgreSQLDialect
spring.jpa.properties.hibernate.format_sql=true

# 🔐 SPRING SECURITY
spring.security.user.name=admin
spring.security.user.password=admin123
spring.security.user.roles=ADMIN

# 📧 EMAIL
spring.mail.host=smtp.gmail.com
spring.mail.port=587
spring.mail.username=seu@email.com
spring.mail.password=senha
spring.mail.properties.mail.smtp.auth=true
spring.mail.properties.mail.smtp.starttls.enable=true

# 🐳 DOCKER PROFILE
spring.profiles.active=prod

# 📝 APPLICATION.YML (alternativa mais elegante)
# server:
#   port: 8080
#   servlet:
#     context-path: /api

# spring:
#   datasource:
#     url: jdbc:postgresql://localhost:5432/meu_banco
#     username: usuario
#     password: senha
#   jpa:
#     hibernate:
#       ddl-auto: update
#     show-sql: true

# 🔥 PROFILES
# application-dev.properties (desenvolvimento)
# application-prod.properties (produção)
# Ative com: spring.profiles.active=dev

# 📦 EXEMPLO PRÁTICO
# app.name=Minha API
# app.version=1.0.0
# app.description=API da F1 Code`,
                        dica: "💡 Use YAML para configurações mais legíveis. Profiles permitem configurar ambientes diferentes (dev, prod, test)."
                    }
                }
            ]
        },
        {
            id: "rest",
            nome: "🍃 REST APIS",
            icone: "🌐",
            descricao: "Controllers, endpoints, HTTP methods, Request/Response",
            progresso: 0,
            subCards: [
                {
                    id: "controllers",
                    nome: "Controllers e Endpoints",
                    icone: "🎮",
                    descricao: "@RestController, @GetMapping, @PostMapping, @PutMapping, @DeleteMapping",
                    conteudo: {
                        explicacao: "Controllers são o ponto de entrada das requisições HTTP. Eles recebem requisições e retornam respostas.",
                        codigo: `// 🎮 CONTROLLER COMPLETO
package com.exemplo.api.controller;

import com.exemplo.api.model.User;
import com.exemplo.api.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserService userService;

    // 📋 GET - Listar todos
    @GetMapping
    public List<User> getAllUsers() {
        return userService.findAll();
    }

    // 🔍 GET - Buscar por ID
    @GetMapping("/{id}")
    public ResponseEntity<User> getUserById(@PathVariable Long id) {
        User user = userService.findById(id);
        if (user != null) {
            return ResponseEntity.ok(user);
        }
        return ResponseEntity.notFound().build();
    }

    // ➕ POST - Criar novo
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public User createUser(@RequestBody User user) {
        return userService.save(user);
    }

    // ✏️ PUT - Atualizar
    @PutMapping("/{id}")
    public ResponseEntity<User> updateUser(@PathVariable Long id, @RequestBody User user) {
        User updated = userService.update(id, user);
        if (updated != null) {
            return ResponseEntity.ok(updated);
        }
        return ResponseEntity.notFound().build();
    }

    // ❌ DELETE - Remover
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable Long id) {
        boolean deleted = userService.delete(id);
        if (deleted) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }

    // 🔧 PARÂMETROS
    @GetMapping("/search")
    public List<User> searchUsers(
            @RequestParam(required = false) String name,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size) {
        return userService.search(name, page, size);
    }

    // 🌐 PATH VARIABLES
    @GetMapping("/email/{email}")
    public User getUserByEmail(@PathVariable String email) {
        return userService.findByEmail(email);
    }
}`,
                        dica: "🔥 Use ResponseEntity para controle total sobre o status HTTP. @PathVariable para parâmetros na URL, @RequestParam para query params."
                    }
                },
                {
                    id: "request-response",
                    nome: "Request e Response",
                    icone: "📨",
                    descricao: "@RequestBody, @ResponseBody, ResponseEntity, DTOs",
                    conteudo: {
                        explicacao: "Como receber dados (Request) e enviar respostas (Response) nas APIs REST.",
                        codigo: `// 📨 REQUEST E RESPONSE

// 🎯 DTO (Data Transfer Object)
// Usado para transferir dados entre cliente e servidor
public class UserDTO {
    private Long id;
    private String name;
    private String email;
    private String password;  // Não enviar para o front!
    
    // Getters e Setters
}

// 📥 @RequestBody - Receber JSON no corpo da requisição
@PostMapping
public ResponseEntity<UserDTO> createUser(@RequestBody UserDTO userDTO) {
    User saved = userService.save(userDTO);
    return ResponseEntity.status(HttpStatus.CREATED).body(toDTO(saved));
}

// 📤 @ResponseBody - Enviar JSON como resposta (já é padrão em @RestController)
@GetMapping("/{id}")
public ResponseEntity<UserDTO> getUser(@PathVariable Long id) {
    User user = userService.findById(id);
    return ResponseEntity.ok(toDTO(user));
}

// 🎯 ResponseEntity - Controle total da resposta
@GetMapping("/{id}")
public ResponseEntity<UserDTO> getUser(@PathVariable Long id) {
    Optional<User> user = userService.findById(id);
    if (user.isPresent()) {
        return ResponseEntity.ok(toDTO(user.get()));
    }
    return ResponseEntity.status(HttpStatus.NOT_FOUND)
            .body(null);
}

// 🔧 CONVERTER ENTITY <-> DTO
public UserDTO toDTO(User user) {
    UserDTO dto = new UserDTO();
    dto.setId(user.getId());
    dto.setName(user.getName());
    dto.setEmail(user.getEmail());
    // Não mapear senha!
    return dto;
}

// 📋 EXEMPLO COMPLETO
@RestController
@RequestMapping("/api/users")
public class UserController {
    
    @PostMapping
    public ResponseEntity<UserDTO> create(@RequestBody UserCreateDTO createDTO) {
        User user = userService.create(createDTO);
        UserDTO response = userMapper.toDTO(user);
        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<UserDTO> get(@PathVariable Long id) {
        User user = userService.findById(id);
        return ResponseEntity.ok(userMapper.toDTO(user));
    }
}`,
                        dica: "💡 SEMPRE use DTOs para respostas! Nunca exponha entidades diretamente. ResponseEntity dá controle total sobre status HTTP e headers."
                    }
                },
                {
                    id: "exception-handling",
                    nome: "Tratamento de Exceções",
                    icone: "⚠️",
                    descricao: "@ControllerAdvice, @ExceptionHandler, ResponseStatusException",
                    conteudo: {
                        explicacao: "Tratamento global de exceções para respostas padronizadas e amigáveis.",
                        codigo: `// ⚠️ TRATAMENTO GLOBAL DE EXCEÇÕES

// 📌 EXCEÇÃO PERSONALIZADA
public class UserNotFoundException extends RuntimeException {
    public UserNotFoundException(String message) {
        super(message);
    }
}

// 🎯 RESPOSTA DE ERRO PADRONIZADA
public class ErrorResponse {
    private int status;
    private String message;
    private String timestamp;
    private String path;
    
    public ErrorResponse(int status, String message, String path) {
        this.status = status;
        this.message = message;
        this.timestamp = LocalDateTime.now().toString();
        this.path = path;
    }
}

// 🔧 @CONTROLLERADVICE - Tratamento Global
@ControllerAdvice
public class GlobalExceptionHandler {
    
    // Trata UserNotFoundException
    @ExceptionHandler(UserNotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public ResponseEntity<ErrorResponse> handleUserNotFound(UserNotFoundException ex, WebRequest request) {
        ErrorResponse error = new ErrorResponse(
            HttpStatus.NOT_FOUND.value(),
            ex.getMessage(),
            request.getDescription(false)
        );
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(error);
    }
    
    // Trata MethodArgumentNotValidException (validações)
    @ExceptionHandler(MethodArgumentNotValidException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ResponseEntity<List<ErrorResponse>> handleValidation(MethodArgumentNotValidException ex) {
        List<ErrorResponse> errors = ex.getBindingResult()
            .getFieldErrors()
            .stream()
            .map(error -> new ErrorResponse(
                HttpStatus.BAD_REQUEST.value(),
                error.getField() + ": " + error.getDefaultMessage(),
                ""
            ))
            .collect(Collectors.toList());
        return ResponseEntity.badRequest().body(errors);
    }
    
    // Trata DataIntegrityViolationException (violação de chave)
    @ExceptionHandler(DataIntegrityViolationException.class)
    @ResponseStatus(HttpStatus.CONFLICT)
    public ResponseEntity<ErrorResponse> handleDataIntegrity(DataIntegrityViolationException ex) {
        ErrorResponse error = new ErrorResponse(
            HttpStatus.CONFLICT.value(),
            "Dados duplicados ou inválidos: " + ex.getMessage(),
            ""
        );
        return ResponseEntity.status(HttpStatus.CONFLICT).body(error);
    }
    
    // Trata Exception genérica (fallback)
    @ExceptionHandler(Exception.class)
    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    public ResponseEntity<ErrorResponse> handleGeneric(Exception ex) {
        ErrorResponse error = new ErrorResponse(
            HttpStatus.INTERNAL_SERVER_ERROR.value(),
            "Erro interno: " + ex.getMessage(),
            ""
        );
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(error);
    }
}

// 🔥 USO NO CONTROLLER
@RestController
public class UserController {
    
    @GetMapping("/{id}")
    public User getUser(@PathVariable Long id) {
        // Lança exceção se não encontrar
        return userService.findById(id)
            .orElseThrow(() -> new UserNotFoundException("Usuário não encontrado com ID: " + id));
    }
    
    @PostMapping
    public User createUser(@Valid @RequestBody User user) {
        // Validação automática com @Valid
        return userService.save(user);
    }
}`,
                        dica: "🔥 @ControllerAdvice é ESSENCIAL para APIs profissionais. Centraliza tratamento de erros e padroniza respostas."
                    }
                },
                {
                    id: "validations",
                    nome: "Validações",
                    icone: "✅",
                    descricao: "@Valid, @NotNull, @Size, @Email, @Min, @Max",
                    conteudo: {
                        explicacao: "Validação de dados de entrada usando Bean Validation e Hibernate Validator.",
                        codigo: `// ✅ VALIDAÇÕES COM BEAN VALIDATION

// 📝 ENTIDADE COM VALIDAÇÕES
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @NotNull(message = "Nome é obrigatório")
    @Size(min = 2, max = 100, message = "Nome deve ter entre 2 e 100 caracteres")
    private String name;
    
    @NotNull(message = "Email é obrigatório")
    @Email(message = "Email inválido")
    @Column(unique = true)
    private String email;
    
    @NotNull(message = "Senha é obrigatória")
    @Size(min = 6, max = 20, message = "Senha deve ter entre 6 e 20 caracteres")
    private String password;
    
    @Min(value = 18, message = "Idade mínima é 18 anos")
    @Max(value = 120, message = "Idade máxima é 120 anos")
    private Integer age;
    
    @Pattern(regexp = "^[0-9]{11}$", message = "CPF deve ter 11 dígitos")
    private String cpf;
    
    // Getters e Setters
}

// 📋 DTO COM VALIDAÇÕES
public class UserCreateDTO {
    @NotBlank(message = "Nome é obrigatório")
    @Size(min = 2, max = 100)
    private String name;
    
    @NotBlank(message = "Email é obrigatório")
    @Email(message = "Email inválido")
    private String email;
    
    @NotBlank(message = "Senha é obrigatória")
    @Size(min = 6, max = 20)
    private String password;
    
    @Min(18)
    @Max(120)
    private Integer age;
}

// 🔧 CONTROLLER COM VALIDAÇÃO
@RestController
@RequestMapping("/api/users")
public class UserController {
    
    @PostMapping
    public ResponseEntity<User> createUser(
            @Valid @RequestBody UserCreateDTO createDTO,
            BindingResult bindingResult) {
        
        // Verifica se tem erros manualmente
        if (bindingResult.hasErrors()) {
            throw new ValidationException(bindingResult);
        }
        
        User user = userService.create(createDTO);
        return ResponseEntity.status(HttpStatus.CREATED).body(user);
    }
}

// 🎯 VALIDAÇÃO COM @Valid NO CONTROLLER
@PostMapping
public ResponseEntity<User> createUser(
        @Valid @RequestBody User user) {
    // Spring valida automaticamente
    return ResponseEntity.status(HttpStatus.CREATED).body(userService.save(user));
}

// 📝 ANOTAÇÕES DE VALIDAÇÃO MAIS COMUNS
// @NotNull - não pode ser null
// @NotBlank - não pode ser null e deve ter pelo menos 1 caractere
// @NotEmpty - não pode ser null e deve ter pelo menos 1 elemento
// @Size - tamanho mínimo e máximo (String, Collection, Array)
// @Min / @Max - valor mínimo/máximo (numbers)
// @Email - valida formato de email
// @Pattern - valida regex
// @Past - data no passado
// @Future - data no futuro
// @Positive / @Negative - número positivo/negativo`,
                        dica: "💡 SEMPRE valide entradas! Use @Valid no controller e mensagens de erro claras. Nunca confie nos dados do cliente!"
                    }
                }
            ]
        },
        {
            id: "database",
            nome: "🍃 BANCO DE DADOS",
            icone: "🗄️",
            descricao: "JPA, Hibernate, PostgreSQL, MongoDB e relacionamentos",
            progresso: 0,
            subCards: [
                {
                    id: "jpa-hibernate",
                    nome: "JPA e Hibernate (TUDO)",
                    icone: "🗄️",
                    descricao: "@Entity, @Table, @Column, @Id, @GeneratedValue, @OneToMany",
                    conteudo: {
                        explicacao: "JPA (Java Persistence API) é a especificação padrão para mapeamento objeto-relacional (ORM) em Java. Hibernate é a implementação mais usada.",
                        codigo: `// 🗄️ JPA E HIBERNATE

// 📌 @Entity - Mapeia uma classe para uma tabela
@Entity
@Table(name = "users")  // Nome da tabela (opcional)
public class User {
    
    @Id  // Chave primária
    @GeneratedValue(strategy = GenerationType.IDENTITY)  // Auto-increment
    private Long id;
    
    @Column(name = "nome", nullable = false, length = 100)
    private String name;
    
    @Column(unique = true, nullable = false)
    private String email;
    
    @Column(nullable = false)
    private String password;
    
    @Column(name = "data_criacao")
    @Temporal(TemporalType.TIMESTAMP)
    private Date createdAt;
    
    @Column(columnDefinition = "TEXT")
    private String bio;
    
    @Transient  // Ignorado no banco
    private String tempField;
    
    // Getters e Setters
}

// 🔗 RELACIONAMENTOS
// @OneToMany - Um para Muitos
@Entity
public class User {
    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Order> orders = new ArrayList<>();
}

// @ManyToOne - Muitos para Um
@Entity
public class Order {
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;
}

// @OneToOne - Um para Um
@Entity
public class User {
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "profile_id")
    private Profile profile;
}

// @ManyToMany - Muitos para Muitos
@Entity
public class User {
    @ManyToMany
    @JoinTable(
        name = "user_roles",
        joinColumns = @JoinColumn(name = "user_id"),
        inverseJoinColumns = @JoinColumn(name = "role_id")
    )
    private List<Role> roles = new ArrayList<>();
}

// 📝 REPOSITORY - Spring Data JPA
@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    // Métodos personalizados
    Optional<User> findByEmail(String email);
    List<User> findByNameContaining(String name);
    boolean existsByEmail(String email);
    
    @Query("SELECT u FROM User u WHERE u.name LIKE %:name%")
    List<User> searchByName(@Param("name") String name);
    
    @Query("SELECT u FROM User u WHERE u.age BETWEEN :min AND :max")
    List<User> findByAgeRange(@Param("min") int min, @Param("max") int max);
}`,
                        dica: "🔥 JpaRepository fornece métodos CRUD prontos! Use @Query para consultas personalizadas. FetchType.LAZY é recomendado para performance."
                    }
                },
                {
                    id: "postgres",
                    nome: "PostgreSQL com Spring",
                    icone: "🐘",
                    descricao: "Configuração, conexão, migrations e ddl-auto",
                    conteudo: {
                        explicacao: "Integração do Spring Boot com PostgreSQL, incluindo configuração, migrations e gerenciamento de schema.",
                        codigo: `# 🐘 POSTGRESQL COM SPRING BOOT

# 📦 DEPENDÊNCIA (pom.xml)
<dependency>
    <groupId>org.postgresql</groupId>
    <artifactId>postgresql</artifactId>
    <scope>runtime</scope>
</dependency>
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-jpa</artifactId>
</dependency>

# ⚙️ APPLICATION.PROPERTIES
# Configuração da conexão
spring.datasource.url=jdbc:postgresql://localhost:5432/meu_banco
spring.datasource.username=usuario
spring.datasource.password=senha
spring.datasource.driver-class-name=org.postgresql.Driver

# JPA/Hibernate
spring.jpa.hibernate.ddl-auto=update
# update: atualiza schema automaticamente
# create: cria e recria tabelas (perde dados!)
# create-drop: cria e dropa ao final
# validate: valida schema
# none: não faz nada

spring.jpa.show-sql=true
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.PostgreSQLDialect
spring.jpa.properties.hibernate.format_sql=true
spring.jpa.properties.hibernate.jdbc.lob.non_contextual_creation=true

# 📂 MIGRATIONS (FLYWAY) - RECOMENDADO
# Dependência
<dependency>
    <groupId>org.flywaydb</groupId>
    <artifactId>flyway-core</artifactId>
</dependency>

# Configuração Flyway
spring.flyway.baseline-on-migrate=true
spring.flyway.locations=classpath:db/migration
spring.flyway.enabled=true

# 📝 MIGRATION FILE
# src/main/resources/db/migration/V1__create_users_table.sql
CREATE TABLE IF NOT EXISTS users (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    age INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

# 📝 ENTIDADE COM POSTGRES SPECIFICS
@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(columnDefinition = "VARCHAR(255) UNIQUE")
    private String email;
    
    @Column(columnDefinition = "TEXT")
    private String bio;
    
    @CreationTimestamp
    private LocalDateTime createdAt;
    
    @UpdateTimestamp
    private LocalDateTime updatedAt;
}`,
                        dica: "💡 Use FLYWAY para versionar o schema! 'ddl-auto=update' é OK para desenvolvimento, mas NUNCA use em produção sem migrations."
                    }
                },
                {
                    id: "jpa-queries",
                    nome: "Queries com JPA (TUDO)",
                    icone: "🔍",
                    descricao: "findBy, @Query, Native Query, Pageable, Specifications",
                    conteudo: {
                        explicacao: "Diferentes formas de consultar dados com Spring Data JPA.",
                        codigo: `// 🔍 QUERIES COM JPA

// 📌 MÉTODOS DERIVADOS (findBy)
public interface UserRepository extends JpaRepository<User, Long> {
    
    // Busca por campo
    Optional<User> findByEmail(String email);
    User findByName(String name);
    
    // Busca com condições
    List<User> findByNameContaining(String name);
    List<User> findByNameStartingWith(String prefix);
    List<User> findByAgeGreaterThan(int age);
    List<User> findByAgeBetween(int min, int max);
    
    // Busca com múltiplos campos
    List<User> findByNameAndAge(String name, int age);
    List<User> findByNameOrEmail(String name, String email);
    
    // Busca com ordenação
    List<User> findByNameOrderByAgeDesc(String name);
    
    // Paginação
    Page<User> findAll(Pageable pageable);
    Page<User> findByNameContaining(String name, Pageable pageable);
}

// 📌 @QUERY (JPQL)
@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    
    @Query("SELECT u FROM User u WHERE u.email = :email")
    Optional<User> findByEmailCustom(@Param("email") String email);
    
    @Query("SELECT u FROM User u WHERE u.name LIKE %:name%")
    List<User> searchByName(@Param("name") String name);
    
    @Query("SELECT u FROM User u WHERE u.age BETWEEN :min AND :max")
    List<User> findByAgeRange(@Param("min") int min, @Param("max") int max);
}

// 📌 NATIVE QUERY (SQL puro)
public interface UserRepository extends JpaRepository<User, Long> {
    
    @Query(value = "SELECT * FROM users WHERE email = :email", nativeQuery = true)
    Optional<User> findByEmailNative(@Param("email") String email);
    
    @Query(value = "SELECT u.* FROM users u WHERE u.name ILIKE %:name%", nativeQuery = true)
    List<User> searchByNameNative(@Param("name") String name);
}

// 📌 PAGINAÇÃO
@Service
public class UserService {
    public Page<User> getUsers(int page, int size, String sortBy) {
        Pageable pageable = PageRequest.of(page, size, Sort.by(sortBy));
        return userRepository.findAll(pageable);
    }
    
    public Page<User> searchUsers(String name, int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        return userRepository.findByNameContaining(name, pageable);
    }
}

// 📌 SPECIFICATIONS (busca dinâmica)
public class UserSpecifications {
    public static Specification<User> hasName(String name) {
        return (root, query, cb) -> cb.like(root.get("name"), "%" + name + "%");
    }
    
    public static Specification<User> minAge(int age) {
        return (root, query, cb) -> cb.greaterThanOrEqualTo(root.get("age"), age);
    }
}

@Service
public class UserService {
    public List<User> searchUsers(String name, Integer minAge) {
        Specification<User> spec = Specification.where(null);
        
        if (name != null) {
            spec = spec.and(UserSpecifications.hasName(name));
        }
        if (minAge != null) {
            spec = spec.and(UserSpecifications.minAge(minAge));
        }
        
        return userRepository.findAll(spec);
    }
}`,
                        dica: "🔥 Métodos derivados (findBy) são ótimos para buscas simples. @Query para JPQL complexo. Native Query para SQL específico."
                    }
                }
            ]
        },
        {
            id: "services",
            nome: "🍃 SERVICES E DEPENDÊNCIAS",
            icone: "🛠️",
            descricao: "@Service, @Autowired, Injeção de dependência, @Transactional",
            progresso: 0,
            subCards: [
                {
                    id: "service-layer",
                    nome: "Camada de Serviço",
                    icone: "🛠️",
                    descricao: "@Service, lógica de negócio e separação de responsabilidades",
                    conteudo: {
                        explicacao: "A camada de serviço contém a lógica de negócio e orquestra os repositórios.",
                        codigo: `// 🛠️ SERVICE COMPLETO

package com.exemplo.api.service;

import com.exemplo.api.exception.UserNotFoundException;
import com.exemplo.api.model.User;
import com.exemplo.api.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    // 📋 Listar todos
    public List<User> findAll() {
        return userRepository.findAll();
    }

    // 🔍 Buscar por ID
    public User findById(Long id) {
        return userRepository.findById(id)
            .orElseThrow(() -> new UserNotFoundException("Usuário não encontrado: " + id));
    }

    // 🔍 Buscar por Email
    public User findByEmail(String email) {
        return userRepository.findByEmail(email)
            .orElseThrow(() -> new UserNotFoundException("Email não encontrado: " + email));
    }

    // ➕ Criar
    @Transactional
    public User create(User user) {
        // Validação
        if (userRepository.existsByEmail(user.getEmail())) {
            throw new RuntimeException("Email já cadastrado: " + user.getEmail());
        }
        
        // Encriptar senha (exemplo)
        user.setPassword(encryptPassword(user.getPassword()));
        
        return userRepository.save(user);
    }

    // ✏️ Atualizar
    @Transactional
    public User update(Long id, User user) {
        User existing = findById(id);
        
        // Atualiza apenas campos preenchidos
        if (user.getName() != null) {
            existing.setName(user.getName());
        }
        if (user.getEmail() != null) {
            // Verificar se email já existe
            if (!existing.getEmail().equals(user.getEmail()) && 
                userRepository.existsByEmail(user.getEmail())) {
                throw new RuntimeException("Email já cadastrado: " + user.getEmail());
            }
            existing.setEmail(user.getEmail());
        }
        if (user.getPassword() != null) {
            existing.setPassword(encryptPassword(user.getPassword()));
        }
        if (user.getAge() != null) {
            existing.setAge(user.getAge());
        }
        
        return userRepository.save(existing);
    }

    // ❌ Deletar
    @Transactional
    public void delete(Long id) {
        if (!userRepository.existsById(id)) {
            throw new UserNotFoundException("Usuário não encontrado: " + id);
        }
        userRepository.deleteById(id);
    }

    // 🔍 Busca com filtros
    public List<User> search(String name, Integer minAge, Integer maxAge) {
        if (name != null) {
            return userRepository.findByNameContaining(name);
        }
        if (minAge != null && maxAge != null) {
            return userRepository.findByAgeBetween(minAge, maxAge);
        }
        return userRepository.findAll();
    }

    // 🔒 Método privado para encriptar
    private String encryptPassword(String password) {
        // Implementar com BCrypt ou outro
        return password;  // Simples para exemplo
    }
}`,
                        dica: "🔥 @Service é a camada de negócio. Use @Transactional para garantir consistência dos dados. SEMPRE valide antes de salvar!"
                    }
                },
                {
                    id: "dependency-injection",
                    nome: "Injeção de Dependência",
                    icone: "🔧",
                    descricao: "@Autowired, @Qualifier, @Primary, @Bean e construtores",
                    conteudo: {
                        explicacao: "Injeção de dependência é o coração do Spring. Permite desacoplar componentes.",
                        codigo: `// 🔧 INJEÇÃO DE DEPENDÊNCIA

// 📌 @AUTOWIRED (Injeção automática)
@Service
public class UserService {
    
    // 1. INJEÇÃO POR CAMPO (menos recomendado)
    @Autowired
    private UserRepository userRepository;
    
    // 2. INJEÇÃO POR CONSTRUTOR (RECOMENDADO!)
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    
    public UserService(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }
    
    // 3. INJEÇÃO POR SETTER
    @Autowired
    public void setUserRepository(UserRepository userRepository) {
        this.userRepository = userRepository;
    }
}

// 📌 @QUALIFIER (Quando há múltiplos beans do mesmo tipo)
public interface NotificationService {
    void send(String message);
}

@Component
@Qualifier("email")
public class EmailNotificationService implements NotificationService {
    @Override
    public void send(String message) {
        System.out.println("Email: " + message);
    }
}

@Component
@Qualifier("sms")
public class SmsNotificationService implements NotificationService {
    @Override
    public void send(String message) {
        System.out.println("SMS: " + message);
    }
}

@Service
public class NotificationFacade {
    @Autowired
    @Qualifier("email")
    private NotificationService emailService;
    
    @Autowired
    @Qualifier("sms")
    private NotificationService smsService;
}

// 📌 @PRIMARY (Bean prioritário)
@Component
@Primary
public class PrimaryNotificationService implements NotificationService {
    @Override
    public void send(String message) {
        System.out.println("Primary: " + message);
    }
}

// 📌 @BEAN (Configuração explícita)
@Configuration
public class AppConfig {
    
    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
    
    @Bean
    public RestTemplate restTemplate() {
        return new RestTemplate();
    }
}

// 💡 INJEÇÃO POR CONSTRUTOR É A RECOMENDADA!
// ✅ Facilita testes
// ✅ Imutabilidade (final)
// ✅ Dependências explícitas`,
                        dica: "🔥 INJEÇÃO POR CONSTRUTOR é a MELHOR prática! Use @Autowired em construtores, não em campos. Facilita testes e deixa o código mais limpo."
                    }
                },
                {
                    id: "transactions",
                    nome: "Transações (@Transactional)",
                    icone: "🔄",
                    descricao: "@Transactional, propagação, isolamento e rollback",
                    conteudo: {
                        explicacao: "Gerenciamento de transações no Spring Boot usando @Transactional.",
                        codigo: `// 🔄 TRANSAÇÕES (@Transactional)

// 📌 @Transactional BÁSICO
@Service
public class UserService {
    
    @Transactional
    public User createUser(User user) {
        userRepository.save(user);
        // Se lançar exceção, rollback automático!
        return user;
    }
}

// 🎯 PROPAGAÇÃO (Propagation)
@Transactional(propagation = Propagation.REQUIRED)  // Padrão: usa a transação atual
@Transactional(propagation = Propagation.REQUIRES_NEW)  // Cria nova transação
@Transactional(propagation = Propagation.NESTED)  // Cria transação aninhada
@Transactional(propagation = Propagation.SUPPORTS)  // Usa transação se existir
@Transactional(propagation = Propagation.NOT_SUPPORTED)  // Não usa transação

// 🔒 ISOLAMENTO (Isolation)
@Transactional(isolation = Isolation.READ_COMMITTED)  // Padrão
@Transactional(isolation = Isolation.READ_UNCOMMITTED)  // Leitura suja
@Transactional(isolation = Isolation.REPEATABLE_READ)  // Leitura repetível
@Transactional(isolation = Isolation.SERIALIZABLE)  // Mais restrito

// 📋 EXEMPLO COMPLETO
@Service
public class OrderService {
    
    @Autowired
    private OrderRepository orderRepository;
    
    @Autowired
    private InventoryService inventoryService;
    
    @Transactional(
        propagation = Propagation.REQUIRED,
        isolation = Isolation.READ_COMMITTED,
        timeout = 30,
        rollbackFor = Exception.class
    )
    public Order createOrder(Order order) {
        // 1. Verifica estoque
        inventoryService.reserveStock(order.getItems());
        
        // 2. Cria pedido
        Order saved = orderRepository.save(order);
        
        // 3. Se falhar, rollback de TUDO!
        if (saved.getTotal() > 1000) {
            throw new RuntimeException("Pedido acima do limite");
        }
        
        return saved;
    }
}

// 🔧 TESTANDO TRANSAÇÕES
@Service
public class UserService {
    
    @Transactional
    public void createUsers() {
        // Tudo em uma transação
        for (User user : users) {
            userRepository.save(user);
        }
    }
    
    @Transactional
    public void createWithError() {
        userRepository.save(new User("João"));
        userRepository.save(new User("Maria"));
        // Lança erro - rollback dos 2 saves!
        throw new RuntimeException("Erro!");
    }
}`,
                        dica: "🔥 @Transactional é ESSENCIAL para consistência. Propagation.REQUIRED é o padrão. Use rollbackFor para exceções específicas."
                    }
                }
            ]
        },
        {
            id: "avancado",
            nome: "🍃 SPRING BOOT AVANÇADO",
            icone: "⚡",
            descricao: "Security, JWT, Cache, Scheduling, Docker, Testes",
            progresso: 0,
            subCards: [
                {
                    id: "security-jwt",
                    nome: "Security e JWT (TUDO)",
                    icone: "🔒",
                    descricao: "Spring Security, autenticação, autorização, JWT, OAuth2",
                    conteudo: {
                        explicacao: "Segurança com Spring Security e JWT (JSON Web Tokens) para autenticação.",
                        codigo: `// 🔒 SPRING SECURITY + JWT

// 📦 DEPENDÊNCIAS
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-security</artifactId>
</dependency>
<dependency>
    <groupId>io.jsonwebtoken</groupId>
    <artifactId>jjwt-api</artifactId>
    <version>0.11.5</version>
</dependency>

// ⚙️ CONFIGURAÇÃO SECURITY
@Configuration
@EnableWebSecurity
public class SecurityConfig {
    
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .csrf(csrf -> csrf.disable())
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/api/auth/**").permitAll()
                .requestMatchers("/api/admin/**").hasRole("ADMIN")
                .anyRequest().authenticated()
            )
            .sessionManagement(session -> 
                session.sessionCreationPolicy(SessionCreationPolicy.STATELESS)
            )
            .authenticationProvider(authenticationProvider())
            .addFilterBefore(jwtAuthenticationFilter(), UsernamePasswordAuthenticationFilter.class);
        
        return http.build();
    }
    
    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}

// 🔑 JWT UTILS
@Component
public class JwtUtils {
    @Value("\${jwt.secret}")
    private String secret;
    
    @Value("\${jwt.expiration}")
    private int expiration;
    
    public String generateToken(String username) {
        return Jwts.builder()
            .setSubject(username)
            .setIssuedAt(new Date())
            .setExpiration(new Date(System.currentTimeMillis() + expiration))
            .signWith(SignatureAlgorithm.HS256, secret)
            .compact();
    }
    
    public String extractUsername(String token) {
        return Jwts.parser()
            .setSigningKey(secret)
            .build()
            .parseClaimsJws(token)
            .getBody()
            .getSubject();
    }
}

// 🔐 AUTHENTICATION CONTROLLER
@RestController
@RequestMapping("/api/auth")
public class AuthController {
    
    @Autowired
    private AuthenticationManager authManager;
    
    @Autowired
    private JwtUtils jwtUtils;
    
    @PostMapping("/login")
    public ResponseEntity<LoginResponse> login(@RequestBody LoginRequest request) {
        Authentication auth = authManager.authenticate(
            new UsernamePasswordAuthenticationToken(
                request.getUsername(),
                request.getPassword()
            )
        );
        
        String token = jwtUtils.generateToken(request.getUsername());
        return ResponseEntity.ok(new LoginResponse(token));
    }
}`,
                        dica: "🔥 JWT é o padrão para APIs REST stateless. Spring Security + JWT é a combinação mais usada."
                    }
                },
                {
                    id: "cache",
                    nome: "Cache (@Cacheable)",
                    icone: "💨",
                    descricao: "@Cacheable, @CacheEvict, @CachePut, Redis Cache",
                    conteudo: {
                        explicacao: "Cache para melhorar performance da aplicação.",
                        codigo: `// 💨 CACHE

// 📦 DEPENDÊNCIA
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-cache</artifactId>
</dependency>

// ⚙️ HABILITAR CACHE
@Configuration
@EnableCaching
public class CacheConfig {}

// 📌 @Cacheable - Guarda resultado em cache
@Service
public class UserService {
    
    @Cacheable(value = "users", key = "#id")
    public User findById(Long id) {
        // Método caro - será cacheado
        return userRepository.findById(id).orElse(null);
    }
    
    @Cacheable(value = "users", key = "#email")
    public User findByEmail(String email) {
        return userRepository.findByEmail(email).orElse(null);
    }
    
    @Cacheable(value = "allUsers", unless = "#result == null")
    public List<User> findAll() {
        return userRepository.findAll();
    }
}

// 📌 @CacheEvict - Remove do cache
@Service
public class UserService {
    
    @CacheEvict(value = "users", key = "#id")
    public void delete(Long id) {
        userRepository.deleteById(id);
    }
    
    @CacheEvict(value = "users", allEntries = true)
    public void deleteAll() {
        userRepository.deleteAll();
    }
}

// 📌 @CachePut - Atualiza cache
@Service
public class UserService {
    
    @CachePut(value = "users", key = "#user.id")
    public User update(User user) {
        return userRepository.save(user);
    }
}

// 🐳 REDIS CACHE (com Docker)
spring.cache.type=redis
spring.data.redis.host=localhost
spring.data.redis.port=6379

// TTL (Time To Live)
spring.cache.redis.time-to-live=600000  // 10 minutos`,
                        dica: "🔥 Cache melhora MUITO performance. Use @Cacheable para métodos que consultam dados que mudam pouco."
                    }
                },
                {
                    id: "scheduling",
                    nome: "Scheduling (@Scheduled)",
                    icone: "⏰",
                    descricao: "@Scheduled, cron, fixedRate, fixedDelay",
                    conteudo: {
                        explicacao: "Agendamento de tarefas no Spring Boot.",
                        codigo: `// ⏰ SCHEDULING

// ⚙️ HABILITAR SCHEDULING
@Configuration
@EnableScheduling
public class SchedulingConfig {}

// 📌 @Scheduled - Tarefas agendadas
@Component
public class ScheduledTasks {
    
    private static final Logger log = LoggerFactory.getLogger(ScheduledTasks.class);
    
    // 🔄 Executa a cada 5 segundos
    @Scheduled(fixedRate = 5000)
    public void reportCurrentTime() {
        log.info("Hora atual: " + LocalDateTime.now());
    }
    
    // 🔄 Executa com delay de 5 segundos após a última execução
    @Scheduled(fixedDelay = 5000)
    public void processAfterDelay() {
        log.info("Executando com delay...");
    }
    
    // 🕐 Executa com horário específico (CRON)
    @Scheduled(cron = "0 0 6 * * *")  // Todo dia às 6h
    public void dailyReport() {
        log.info("Relatório diário gerado!");
    }
    
    // 🕐 CRON expressões
    // 0 0 * * * *    - Todo hora
    // 0 0 6 * * *    - Todo dia às 6h
    // 0 0 6 * * MON  - Toda segunda-feira às 6h
    // 0 0 6 1 * *    - Dia 1 de cada mês às 6h
    
    // 🔧 Tarefa com parâmetros
    @Scheduled(cron = "0 0 2 * * *")
    public void backupDatabase() {
        try {
            // Lógica de backup
            log.info("Backup executado com sucesso!");
        } catch (Exception e) {
            log.error("Erro no backup: " + e.getMessage());
        }
    }
}`,
                        dica: "💡 Use @Scheduled para tarefas recorrentes (backups, relatórios, limpeza). Cron é mais flexível que fixedRate/fixedDelay."
                    }
                },
                {
                    id: "testing",
                    nome: "Testes (TUDO)",
                    icone: "🧪",
                    descricao: "@SpringBootTest, @WebMvcTest, @DataJpaTest, MockMvc",
                    conteudo: {
                        explicacao: "Testes unitários e de integração no Spring Boot.",
                        codigo: `// 🧪 TESTES COM SPRING BOOT

// 📌 TESTE DE CONTROLLER (MockMvc)
@SpringBootTest
@AutoConfigureMockMvc
public class UserControllerTest {
    
    @Autowired
    private MockMvc mockMvc;
    
    @MockBean
    private UserService userService;
    
    @Test
    public void testGetUser() throws Exception {
        User user = new User(1L, "João", "joao@email.com");
        given(userService.findById(1L)).willReturn(user);
        
        mockMvc.perform(get("/api/users/1"))
            .andExpect(status().isOk())
            .andExpect(jsonPath("$.name").value("João"))
            .andExpect(jsonPath("$.email").value("joao@email.com"));
    }
}

// 📌 TESTE DE REPOSITORY (DataJpaTest)
@DataJpaTest
public class UserRepositoryTest {
    
    @Autowired
    private UserRepository userRepository;
    
    @Test
    public void testFindByEmail() {
        User user = new User("teste@email.com");
        userRepository.save(user);
        
        Optional<User> found = userRepository.findByEmail("teste@email.com");
        assertThat(found).isPresent();
        assertThat(found.get().getEmail()).isEqualTo("teste@email.com");
    }
}

// 📌 TESTE DE SERVICE
@ExtendWith(MockitoExtension.class)
public class UserServiceTest {
    
    @Mock
    private UserRepository userRepository;
    
    @InjectMocks
    private UserService userService;
    
    @Test
    public void testFindById() {
        User user = new User(1L, "João");
        when(userRepository.findById(1L)).thenReturn(Optional.of(user));
        
        User found = userService.findById(1L);
        assertThat(found).isNotNull();
        assertThat(found.getName()).isEqualTo("João");
    }
}

// 📌 TESTE DE INTEGRAÇÃO COMPLETO
@SpringBootTest
@AutoConfigureMockMvc
@TestContainers
public class IntegrationTest {
    
    @Container
    static PostgreSQLContainer<?> postgres = new PostgreSQLContainer<>("postgres:15")
            .withDatabaseName("testdb")
            .withUsername("test")
            .withPassword("test");
    
    @Autowired
    private TestRestTemplate restTemplate;
    
    @Test
    public void testFullFlow() {
        UserDTO newUser = new UserDTO("João", "joao@email.com");
        ResponseEntity<UserDTO> response = restTemplate.postForEntity("/api/users", newUser, UserDTO.class);
        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.CREATED);
    }
}`,
                        dica: "🔥 Testes são ESSENCIAIS! @SpringBootTest para integração, @WebMvcTest para controllers, @DataJpaTest para repository."
                    }
                }
            ]
        }
    ]
};

// Estado da aplicação
let currentCategoryId = null;
let currentSubCardId = null;

// Funções de navegação
function showCategories() {
    document.getElementById('categoriesContainer').style.display = 'grid';
    document.getElementById('subCardsContainer').style.display = 'none';
    document.getElementById('contentContainer').style.display = 'none';
    document.getElementById('backToCategories').style.display = 'none';
    document.getElementById('backToSubCards').style.display = 'none';
    renderCategories();
}

function showSubCards(categoryId) {
    currentCategoryId = categoryId;
    document.getElementById('categoriesContainer').style.display = 'none';
    document.getElementById('subCardsContainer').style.display = 'block';
    document.getElementById('contentContainer').style.display = 'none';
    document.getElementById('backToCategories').style.display = 'inline-block';
    document.getElementById('backToSubCards').style.display = 'none';
    renderSubCards(categoryId);
}

function showContent(categoryId, subCardId) {
    currentCategoryId = categoryId;
    currentSubCardId = subCardId;
    document.getElementById('categoriesContainer').style.display = 'none';
    document.getElementById('subCardsContainer').style.display = 'none';
    document.getElementById('contentContainer').style.display = 'block';
    document.getElementById('backToCategories').style.display = 'none';
    document.getElementById('backToSubCards').style.display = 'inline-block';
    renderContent(categoryId, subCardId);
}

// Renderizar categorias principais
function renderCategories() {
    const container = document.getElementById('categoriesContainer');
    if (!container) return;
    
    let html = '';
    
    springData.categorias.forEach(categoria => {
        const completed = getCompletedCount(categoria.id);
        const total = categoria.subCards.length;
        const percent = Math.floor((completed / total) * 100);
        
        html += `
            <div class="category-card" onclick="showSubCards('${categoria.id}')">
                <div class="category-icon">${categoria.icone}</div>
                <h2>${categoria.nome}</h2>
                <p>${categoria.descricao}</p>
                <div class="category-progress">
                    📊 ${completed}/${total} tópicos (${percent}%)
                </div>
            </div>
        `;
    });
    
    container.innerHTML = html;
}

// Renderizar sub-cards
function renderSubCards(categoryId) {
    const container = document.getElementById('subCardsContainer');
    const categoria = springData.categorias.find(c => c.id === categoryId);
    
    if (!categoria) return;
    
    let html = `<h2 class="section-title">☕ ${categoria.nome} ☕</h2>`;
    html += `<div class="sub-cards-grid">`;
    
    categoria.subCards.forEach(subCard => {
        const isCompleted = isSubCardCompleted(categoryId, subCard.id);
        const completedClass = isCompleted ? 'completed' : '';
        
        html += `
            <div class="sub-card ${completedClass}" onclick="showContent('${categoryId}', '${subCard.id}')">
                <div class="sub-card-icon">${subCard.icone}</div>
                <h3>${subCard.nome}</h3>
                <p>${subCard.descricao}</p>
            </div>
        `;
    });
    
    html += `</div>`;
    container.innerHTML = html;
}

// Renderizar conteúdo do tópico
function renderContent(categoryId, subCardId) {
    const container = document.getElementById('contentContainer');
    const categoria = springData.categorias.find(c => c.id === categoryId);
    const subCard = categoria?.subCards.find(s => s.id === subCardId);
    
    if (!subCard) return;
    
    const isCompleted = isSubCardCompleted(categoryId, subCardId);
    const btnText = isCompleted ? '✅ TÓPICO CONCLUÍDO!' : '☕ MARCAR COMO CONCLUÍDO';
    
    let html = `
        <div class="content-card">
            <div class="content-title">${subCard.icone} ${subCard.nome}</div>
            <div class="content-explanation">${subCard.conteudo.explicacao}</div>
            
            <div class="code-block">
                <button class="copy-btn" onclick="copyCode(this)">📋 COPIAR</button>
                <pre>${escapeHtml(subCard.conteudo.codigo)}</pre>
            </div>
            
            <div class="tip">
                <strong>☕ DICA DO HAMILTON:</strong> ${subCard.conteudo.dica}
            </div>
            
            <button id="markCompleteBtn" class="mark-complete-btn ${isCompleted ? 'completed' : ''}" onclick="toggleComplete('${categoryId}', '${subCardId}')">
                ${btnText}
            </button>
        </div>
    `;
    
    container.innerHTML = html;
}

// Função para copiar código
function copyCode(button) {
    const codeBlock = button.nextElementSibling;
    const code = codeBlock.innerText;
    navigator.clipboard.writeText(code).then(() => {
        const originalText = button.innerText;
        button.innerText = '✓ COPIADO!';
        setTimeout(() => {
            button.innerText = originalText;
        }, 2000);
    });
}

// Função para escapar HTML
function escapeHtml(text) {
    return text
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

// Gerenciar progresso
function getCompletedCount(categoryId) {
    const saved = localStorage.getItem(`completed_spring_${categoryId}`);
    if (!saved) return 0;
    return JSON.parse(saved).length;
}

function isSubCardCompleted(categoryId, subCardId) {
    const saved = localStorage.getItem(`completed_spring_${categoryId}`);
    if (!saved) return false;
    const completed = JSON.parse(saved);
    return completed.includes(subCardId);
}

function toggleComplete(categoryId, subCardId) {
    let completed = JSON.parse(localStorage.getItem(`completed_spring_${categoryId}`) || '[]');
    
    if (completed.includes(subCardId)) {
        completed = completed.filter(id => id !== subCardId);
        console.log(`%c📘 ${subCardId} marcado como pendente`, "color: #ff8c00");
    } else {
        completed.push(subCardId);
        console.log(`%c✅ ${subCardId} concluído!`, "color: #00ff00");
    }
    
    localStorage.setItem(`completed_spring_${categoryId}`, JSON.stringify(completed));
    
    if (currentSubCardId) {
        renderContent(categoryId, subCardId);
    }
    
    if (document.getElementById('subCardsContainer').style.display === 'block') {
        renderSubCards(categoryId);
    }
    
    if (document.getElementById('categoriesContainer').style.display === 'grid') {
        renderCategories();
    }
}

// Efeito de digitação no título
function typeWriterEffect() {
    const title = document.querySelector('.tech-header h1');
    if (!title) return;
    
    const originalText = title.innerText;
    title.innerText = '';
    let i = 0;
    
    function type() {
        if (i < originalText.length) {
            title.innerText += originalText.charAt(i);
            i++;
            setTimeout(type, 80);
        }
    }
    
    type();
}

// Configurar botões de navegação
function setupNavigationButtons() {
    const backToCategories = document.getElementById('backToCategories');
    const backToSubCards = document.getElementById('backToSubCards');
    
    if (backToCategories) {
        backToCategories.addEventListener('click', () => {
            showCategories();
        });
    }
    
    if (backToSubCards) {
        backToSubCards.addEventListener('click', () => {
            if (currentCategoryId) {
                showSubCards(currentCategoryId);
            }
        });
    }
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    showCategories();
    setupNavigationButtons();
    typeWriterEffect();
    console.log("%c☕ Spring Boot 3 F1 carregado! Hamilton's Garage está pronto! ☕", "color: #6db33f; font-size: 14px; font-weight: bold;");
    console.log("%c⚡ Categorias → Tópicos → Conteúdo. Seu progresso é salvo automaticamente!", "color: #ffd700; font-size: 12px;");
});