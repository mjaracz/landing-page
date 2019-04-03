//@flow
import * as React from 'react';
import CircularProgress from "@material-ui/core/CircularProgress/index";
import Item from '../../redux/reducers/getParamsCategories';


type Props = {
  liItems: Item[],
  isLoading: boolean,
  onClickCategory(): void
}

const SideBarComponent = (props: Props) => {
  const { liItems, isLoading, onClickCategory } = props;

  const items = liItems.map((item, index ) => {
    return(
      <li key={index}>
        <a
          href='/'
          className={item.name}
          onClick={e => onClickCategory(e)}
        >
          { item.name }
        </a>
      </li>
    )
  });
  return(
    <aside className="main__sidebar">
      <ul>
        <h5 className="sidebar__title">Categories</h5>
        {
          isLoading
            ? <CircularProgress style={{color: '#f62f5e', margin: 50}} />
            : items
        }
      </ul>
    </aside>
  )
};

export default SideBarComponent;
