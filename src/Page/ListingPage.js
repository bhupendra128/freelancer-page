import CardListing from "../container/card-listing";
import Header from "../container/header";

/**
 * ListingPage Component that will create ListingPage route with different components
 */

const ListingPage = () => {
  return (
    <div className="listing-page">
      <Header />
      <CardListing />
    </div>
  );
};

export default ListingPage;
