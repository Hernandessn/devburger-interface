import { useEffect, useState } from "react";
import { Banner, ButtonHome, CategoryButton, CategoryMenu, Container, ProductsContainer } from "./styles";
import { api } from "../../services/api";
import { formatPrice } from "../../utils/formatPrice";
import { CardProduct } from "../../components/CardProduct";



import { useLocation, useNavigate } from "react-router-dom";

export function Menu() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);


  const navigate = useNavigate();

  const {search} = useLocation();

  const queryParams = new URLSearchParams(search);

 

  const [activeCategory, setActiveCategories] = useState(()=>{
    const categoryId = +queryParams.get('categoria')

    if(categoryId){
      return categoryId
    }
    return 0
  });
 
  
  // Carrega as categorias
  useEffect(() => {
    async function loadCategories() {
      try {
        const { data } = await api.get('/categories');
        const newCategories = [{ id: 0, name: 'Todas' }, ...data];
        setCategories(newCategories);
      } catch (error) {
        console.error("Erro ao carregar categorias:", error);
      }
    }
    loadCategories();
  }, []);

  // Carrega os produtos
  useEffect(() => {
    async function loadProducts() {
      try {
        const { data } = await api.get('/products');
        const newProducts = data
          .filter(product => product.offer) // Filtra apenas produtos em oferta
          .map(product => ({
            currencyValue: formatPrice(product.price),
            ...product,
          }));
        setProducts(newProducts);
      } catch (error) {
        console.error("Erro ao carregar produtos:", error);
      }
    }
    loadProducts();
  }, []);

  useEffect(()=>{
    if(activeCategory === 0){
        setFilteredProducts(products)
    }else{
        const newFilteredProducts = products.filter(
            product => product.category_id === activeCategory,
        );

        setFilteredProducts(newFilteredProducts)
    }

  }, [products,activeCategory])

  return (
    <Container>
      <Banner>
        <h1>
          O MELHOR 
          <br />
          HAMBURGER 
          <br />
          ESTÁ AQUI!
          <span>Esse cardápio está irresistível!</span>
        </h1>
      </Banner>

      <CategoryMenu>
        {categories.map(category => (
          <CategoryButton 
          key={category.id}
          $isActiveCategory={category.id === activeCategory}
          onClick={()=>{
                navigate(
                    {
                        pathname: '/cardapio',
                        search: `?categoria=${category.id}`
                    },
                    {
                        replace: true,
                    },
                );
                setActiveCategories(category.id)
          }}
          >{category.name}</CategoryButton>
        ))}
      </CategoryMenu>

      <ProductsContainer>
        {filteredProducts.map(product => (
          <CardProduct product={product} key={product.id} />
        ))}
      </ProductsContainer>
      <ButtonHome onClick={()=>{
       setTimeout(() => {
        navigate('/home')
       }, 2000);
      }}>Voltar</ButtonHome>
    </Container>
  );
}
