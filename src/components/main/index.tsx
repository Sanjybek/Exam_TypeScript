import s from './style.module.scss';
import { TypArr } from '../../store/product/initialState';
import MainBlock from './mainBlock';
import ProductBlock from './productBlock';
import SaveBlock from './saveBlock';
import { useAppSelector } from '../../hook';
import SkeletonBlock from './skeleton/skeleton';

export type ProductsType = {
  handleSort: (operator: string) => void;
  setSearchValue: (title: string) => void;
  searchPruducts: () => void;
  products: TypArr[];
  handleDelete: (id: number, title: string) => void;
  desc: (id: number) => void;
  edit: (id: number) => void;
  showConfirmation: boolean;
  confirmDelete: () => void;
  cancelDelete: () => void;
  searchValue: string;
  deleteItemTitle: string;
};

const Main: React.FC<ProductsType> = ({
  products,
  handleDelete,
  desc,
  edit,
  deleteItemTitle,
  handleSort,
  setSearchValue,
  searchPruducts,
  showConfirmation,
  confirmDelete,
  cancelDelete,
  searchValue,
}) => {
  const { isLoad } = useAppSelector((state) => state.productReducer);
  return (
    <>
      <MainBlock
        setSearchValue={setSearchValue}
        handleSort={handleSort}
        searchPruducts={searchPruducts}
        searchValue={searchValue}
      />
      <div className={s.container}>
        <div className={s.main__card}>
          {isLoad ? (
            <SkeletonBlock />
          ) : (
            products.map((product) => (
              <ProductBlock
                key={product.id}
                product={product}
                handleDelete={handleDelete}
                desc={desc}
                edit={edit}
                showConfirmation={showConfirmation}
                confirmDelete={confirmDelete}
                cancelDelete={cancelDelete}
                deleteItemTitle={deleteItemTitle}
              />
            ))
          )}
        </div>
      </div>
      <SaveBlock />
    </>
  );
};

export default Main;
