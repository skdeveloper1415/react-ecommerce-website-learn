import { useProductsContext } from '../context/productcontext';
import Product from '../components/Product';


const FeatureServices = () => {  
  const { isLoading, featureProducts } = useProductsContext();
  if (isLoading) {
    return <div>...Loading</div>
  }
  return (
    <section className='bg-amber-200 py-5'>
        <div className="px-16">
            <h4 className='font-light'>Check Now</h4>
            <h3 className='font-bold'>Our Feature Services</h3>
            <div className="grid grid-cols-3 gap-5 mt-2.5">
                {featureProducts.map((curElem) => {
                    return <Product key={curElem.id} {...curElem} />;
                  }
                )}
            </div>
        </div>
    </section>
  )
}

export default FeatureServices