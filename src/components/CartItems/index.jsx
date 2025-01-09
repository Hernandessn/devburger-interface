import { Table } from '../index'
import { useCart } from '../../hooks/CartContext'
import { formatPrice } from '../../utils/formatPrice';
import { ButtonGroup, EmptyCart, ProductImage, ProductTotalPrice } from './styles';

import { Trash } from '@phosphor-icons/react'
export function CartItems(){
const { cartProducts,decreaseProduct, increaseProduct,deleteProduct} = 
useCart();


    return(
        <Table.Root>
         <Table.Header>
            <Table.Tr>
                <Table.Th> </Table.Th>
                <Table.Th>Itens</Table.Th>
                <Table.Th>Preço</Table.Th>
                <Table.Th>Quantidade</Table.Th>
                <Table.Th>Total</Table.Th>
                <Table.Th> </Table.Th>
            </Table.Tr>
         </Table.Header>
         <Table.Body>{cartProducts?.length ? (
                cartProducts.map(product =>(
                    <Table.Tr key={product.id}>
                        <Table.Td><ProductImage src={product.url} alt={product.name}/></Table.Td>
                        <Table.Td>{product.name}</Table.Td>
                        <Table.Td>{product.currencyValue}</Table.Td>
                        <Table.Td>
                            <ButtonGroup>
                                {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
                              <button onClick={()=> decreaseProduct(product.id)}>-</button>  

                              {product.quantity} 
                             {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
                               <button onClick={()=> increaseProduct(product.id)}>+</button>
                            </ButtonGroup>
                               
                           
        
                            </Table.Td>
                        <Table.Td>
                            <ProductTotalPrice>
                                {formatPrice(product.quantity * product.price)}
                            </ProductTotalPrice>
                            
                        </Table.Td>
                        <Table.Td>
                        <Trash cursor='pointer' size={25} onClick={()=> deleteProduct(product.id)} />
                        </Table.Td>
                    </Table.Tr>
                   
                ))
            ) : <EmptyCart>Carrinho vazio</EmptyCart>}</Table.Body>
             
        </Table.Root>
    )
}