import { star } from "../assets/icons";

const PopularProductCard = ({ imgURL, name, price, rating }) => {
  return (
    <div className="flex flex-1 flex-col justify-self-center mb-5">
      <img src={imgURL} alt={name} className="w-[280px] h=[280px]" />
      <div className="mt-6 ml-4 flex justify-start gap-2.5">
        <img src={star} alt="rating" width={24} height={24} />
        <p className="font-montserrat text-xl text-slate-gray leading-normal">
          ({rating})
        </p>
      </div>
      <h3 className="mt-2 ml-4 text-xl leading-normal font-semibold font-palanquin">
        {name}
      </h3>
      <p className="mt-2 ml-4 font-semibold font-montserrat text-coral-red leading-normal">
        {price}
      </p>
    </div>
  );
};

export default PopularProductCard;
