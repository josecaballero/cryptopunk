import CollectionCard from "./../CollectionCard/CollectionCard";

import "./PunkList.css";

const PunkList = ({ punkListData, setSelectedPunk }) => {
  return (
    <div className="punkList">
      {punkListData.map((punk, index) => {
        const { token_id, name, traits, image_url } = punk;
        return (
          <div key={index} onClick={() => setSelectedPunk(token_id)}>
            <CollectionCard
              id={token_id}
              name={name}
              traits={traits}
              image={image_url}
            />
          </div>
        );
      })}
    </div>
  );
};

export default PunkList;
