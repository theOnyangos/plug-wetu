import PropTypes from "prop-types";
import { useContext, useState } from "react";
import {
  ProductBreadcrumb,
  ProductDescription,
  ProductReviewOverview,
  ProductDetailOverview,
  ProductReviewMessages,
  MobileCartActionButtons,
} from "@/components";
import { ProductDetailsContext } from "@/context/ProductDetailsContext";
import useToastTheme from "@/hooks/useToastTheme";
import { useCart } from "@/store/useCart";
import useScreenSize from "@/hooks/useScreenSize";

const ProductDetailComponent = () => {
  const { productDetails } = useContext(ProductDetailsContext);
  const [showModal, setShowModal] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const { showToast } = useToastTheme();
  const {
    addToCart,
    isInCart,
    updateCartItemQuantity,
    checkMaxQuantityExceeded,
  } = useCart();
  const isMobile = useScreenSize();

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleSelectColor = (event) => {
    const selectedValue = event.target.value;
    setSelectedColor(selectedValue);
  };

  const handleSelectSize = (event) => {
    const selectedValue = event.target.value;
    setSelectedSize(selectedValue);
  };

  const addItemToCart = (item) => {
    addToCart(item);
  };

  const handleAddToCart = () => {
    if (!selectedColor) {
      showToast(
        "error",
        'Please select a color for the product: "' +
          productDetails.title.toLowerCase() +
          '"'
      );
      return;
    }

    if (!selectedSize) {
      showToast(
        "error",
        'Please select a size for the product: "' +
          productDetails.title.toLowerCase() +
          '"'
      );
      return;
    }

    const item = {
      id: productDetails.id,
      title: productDetails.title,
      slug: productDetails.slug,
      price: productDetails.discount_price,
      discount: productDetails.price,
      image: productDetails.thumbnail,
      color: selectedColor,
      size: selectedSize,
      maxQuantity: productDetails.maxQuantity,
      quantity: quantity,
    };

    if (isInCart(item)) {
      if (checkMaxQuantityExceeded(item.id, item.maxQuantity)) {
        showToast(
          "error",
          "You have reached the maximum quantity you can add to cart for this product"
        );
        return;
      }
      updateCartItemQuantity(item.id, quantity);
      showToast("success", "Item updated in cart");
    } else {
      addItemToCart(item);
      showToast("success", "Item added to cart");
    }
  };

  return (
    <div className="mb-[90px]">
      {/* Breadcrumb */}
      <ProductBreadcrumb productDetails={productDetails} />

      {/* Product Details Overview */}
      <ProductDetailOverview
        toggleModal={toggleModal}
        showModal={showModal}
        productDetails={productDetails}
        handleSelectColor={handleSelectColor}
        selectedColor={selectedColor}
        handleSelectSize={handleSelectSize}
        selectedSize={selectedSize}
        quantity={quantity}
        setQuantity={setQuantity}
        handleAddToCart={handleAddToCart}
      />

      {/* Product Description */}
      <ProductDescription productDetails={productDetails} />

      {/* Reviews Overview */}
      <ProductReviewOverview productDetails={productDetails} />

      {/* Review Messages */}
      <ProductReviewMessages />

      {/* Add to cart */}
      {isMobile && (
        <MobileCartActionButtons handleAddToCart={handleAddToCart} />
      )}
    </div>
  );
};

ProductDetailComponent.propTypes = {
  productDetails: PropTypes.object,
};

export default ProductDetailComponent;
