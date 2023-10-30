console.log("prueba");


// class of sumbido
function addClassToBoxBuy() {
    var buttonBuy = document.getElementById("_rsi-buy-now-button");
    // var buttonBuyModal = document.querySelector("._rsi-build-block-submit-button");
    // console.log("buttonBuyModal",buttonBuyModal);

    function toggleClass() {
        buttonBuy.classList.toggle("_rsi-buy-now-button-shaker-enabled");
        // buttonBuyModal.classList.toggle("_rsi-buy-now-button-shaker-enabled");
   
    }

    setInterval(toggleClass, 1000); // Toggle class every 0.2 seconds
}

// add first and second modal:  
function addModal() {

// Crear el primer div
var div1 = document.createElement("div");
div1.id = "_rsi-cod-form-modal";
div1.classList.add("_rsi-cod-form-modal-open");

// Crear el segundo div
var div2 = document.createElement("div");
div2.classList.add("_rsi-modal-container", "_rsi-modal-container-full-screen");

// Adjuntar el segundo div al primer div
div1.appendChild(div2);

// Obtener el div contenedor donde deseas añadir estos elementos
var container = document.getElementById("MainContent"); // Asegúrate de reemplazar "tuContenedor" con el ID correcto

if (container) {
    // Agregar los divs al contenedor
    container.appendChild(div1);
}

    var divModal =document.getElementsByClassName("_rsi-modal-container-full-screen")

    // var div = document.createElement("div");
    if (divModal) {
    divModal[0].innerHTML += `
    
        <form id="_rsi-cod-form-modal-form" autocomplete="on" action="" novalidate=""
            class="_rsi-modal-form">
            <div class="_rsi-modal-header">
                <div class="_rsi-modal-header-title"
                    style="text-align: left !important; color: rgba(0,0,0,1) !important; font-weight: 600 !important; font-size: calc(1 * 1.15em) !important;">
                    🟢¡Haz tu pedido y Paga en Casa!</div><button id="_rsi-cod-form-modal-close"
                    class="_rsi-modal-close-button" type="button"><svg class="_rsi-icon"
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M0 0h24v24H0V0z" fill="none"></path>
                        <path
                            d="M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z">
                        </path>
                    </svg></button>
            </div>
            <div id="rsi-cod-form-quantity-offers-hook"></div>
            <div class="_rsi-build-block _rsi-build-block-order-summary _rsi-build-block-not-active">
                <div class="_rsi-modal-line-items">
                    <div class="_rsi-modal-line-item" data-line-item-variant-id="42377934405812">
                        <div class="_rsi-modal-line-item-image-container"><img
                                src="https://cdn.shopify.com/s/files/1/0623/0917/1380/files/bc9aa0f1-79b7-450e-9606-ac52521b27bc.jpg?v=1695850412"
                                class="_rsi-modal-line-item-image">
                            <div class="_rsi-modal-line-item-quantity">1</div>
                        </div><input type="hidden" name="item_variant_id[0]" value="42377934405812"><input type="hidden"
                            name="item_quantity[0]" value="1"><input type="hidden" name="item_properties[0]"
                            value="%7B%7D">
                        <div class="_rsi-modal-line-item-info"><a class="_rsi-modal-line-item-title"
                                href="/products/luces-solares-de-navidad?variant=42377934405812">LUCES SOLARES DE
                                NAVIDAD</a></div>
                        <div class="_rsi-modal-line-item-final-price">S/. 97.00</div>
                    </div>
                </div>
            </div>
            <div class="_rsi-build-block _rsi-build-block-totals-summary">
                <div class="_rsi-modal-checkout-lines">
                    <div class="_rsi-modal-checkout-line" data-checkout-line="subtotal">
                        <span class="_rsi-modal-checkout-line-title">Subtotal</span>
                        <span class="_rsi-modal-checkout-line-value">S/. 97.00</span>
                    </div>
                    <input type="hidden" name="shipping_rate_priority" value="1">
                    <div class="_rsi-modal-checkout-line" data-checkout-line="shipping">
                        <span class="_rsi-modal-checkout-line-title">Envío</span>
                        <span class="_rsi-modal-checkout-line-value">Gratis</span>
                    </div>
                    <div class="_rsi-modal-checkout-line" data-checkout-line="total" data-order-total="9700" data-partial-total-for-checkout="9700">
                        <span class="_rsi-modal-checkout-line-title _rsi-modal-checkout-line-value-bigger">Total</span>
                        <span class="_rsi-modal-checkout-line-value _rsi-modal-checkout-line-value-bigger">S/. 97.00</span>
                    </div>
                </div>
        
            </div>
            <div class="_rsi-build-block _rsi-build-block-shipping-rates _rsi-build-block-not-active"><span
                    class="_rsi-modal-shipping-rates-title" style="text-align: left !important;"></span>
                <div class="_rsi-modal-shipping-rates">
                    <div class="_rsi-modal-shipping-rates-item" data-priority="1" data-selected="true">
                        <div class="_rsi-modal-shipping-rates-item-checkbox-container">
                            <div class="_rsi-modal-shipping-rates-item-checkbox"></div>
                        </div><span class="_rsi-modal-shipping-rates-item-title">Envío GRATIS</span><span
                            class="_rsi-modal-checkout-line-price">Gratis</span>
                    </div>
                </div>
            </div>
            <div class="_rsi-build-block _rsi-build-block-discount-codes">
                <div class="_rsi-modal-discounts">
                    <div class="_rsi-modal-discounts-form">
                        <div class="_rsi-modal-fields-item"><input id="_rsi-modal-discounts-form-code" type="text"
                                placeholder="Código de descuento"><button id="_rsi-modal-discounts-form-apply"
                                type="button" style="background: rgba(0,0,0,1);">Aplicar</button></div>
                        <div class="_rsi-modal-fields-item _rsi-modal-fields-item-discount-error"></div>
                    </div>
                    <div class="_rsi-modal-discounts-plaques"></div>
                </div>
            </div>
            <div data-type="custom_text"
                class="_rsi-build-block _rsi-build-block-custom-text _rsi-build-block-not-active">
                <div class="_rsi-custom-text-field"
                    style="text-align: center !important; color: rgba(0,0,0,1) !important; font-weight: 600 !important; font-size: calc(1 * 1.15em) !important;">
                    Ingrese su dirección de envío</div>
            </div>
            <div class="_rsi-modal-fields-item _rsi-modal-fields-item-with-icon"><label>Nombre y Apellido<span
                        class="_rsi-modal-required-label">*</span></label><input type="text" data-type="first_name" name="first_name" placeholder="ESCRIBE tus Nombres y Apellidos" id="_rsi-field-first_name" required="required" data-maxl="250" data-minl="2"></div>



                    
            <div class="_rsi-modal-fields-item _rsi-modal-fields-item-with-icon"><label>Celular / WhatsApp <span
                        class="_rsi-modal-required-label">*</span></label><input autocomplete="tel-national" type="tel"
                    data-type="phone" name="phone" placeholder="ESCRIBE tu número " id="_rsi-field-phone"
                    required="required" data-maxl="9" data-minl="9"></div>
            <div class="_rsi-modal-fields-item _rsi-modal-fields-item-with-icon"><label>Dirección exacta<span
                        class="_rsi-modal-required-label">*</span></label><input type="text" data-type="address"
                    name="address" placeholder="ESCRIBE tu dirección/ y referencias" id="_rsi-field-address"
                    required="required" data-maxl="250" data-minl="8"></div>
            <div class="_rsi-modal-fields-item _rsi-modal-fields-item-with-icon"><label>Distrito / Ciudad<span
                        class="_rsi-modal-required-label">*</span></label><input type="text" data-type="city"
                    name="city" placeholder="ESCRIBE tu Distrito / y Ciudad  " id="_rsi-field-city" required="required"
                    data-maxl="250" data-minl="2"></div>
            <div id="rsi-cod-form-tick-ups-hook">
                <div class="_rsi-tick-ups">
                    <div class="_rsi-tick-ups-container" data-tick-ups-id="1684626229929">
                        <div
                            class="_rsi-tick-ups-offer _rsi-modal-fields-item _rsi-modal-fields-checkbox _rsi-tick-ups-offer-with-border">
                            <label
                                style="background-color: rgba(217,235,246,1) !important; border: 2px solid rgba(0,116,191,1) !important;"><input
                                    type="hidden" name="tick_ups_id_1684626229929_GARANT%C3%8DA%20ILIMITADA%20"
                                    value="-1" data-tick-ups-hidden-input="true" data-tick-ups-id="1684626229929"><input
                                    name="tick_ups_visible_checkbox_1684626229929" type="checkbox"
                                    data-tick-ups-visible-checkbox="true" data-tick-ups-id="1684626229929" ><span><span
                                        style="color: rgba(53, 27, 214, 1) !important;">Agrega <b>GARANTÍA ILIMITADA
                                        </b> por <b>S/. 4.90</b></span></span></label></div>
                    </div>
                </div>
            </div>
            <div class="_rsi-build-block _rsi-build-block-submit-button">
            <button type="button"
                    style="background: rgba(248, 238, 3, 1) !important; color: rgba(0,0,0,1) !important; border-radius: 50px !important; border: 0px solid rgba(0,0,0,1) !important; box-shadow: 0 2px 7px 0px rgba(0, 0, 0, 0.2) !important; font-size: calc(1.3 * 16.8px) !important;"
                    class="_rsi-modal-submit-button _rsi-buy-now-button _rsi-buy-now-button-shaker _rsi-buy-now-button-with-subtitle"
                    data-animation-type="pulse"><span>✅QUIERO MI PEDIDO YA<span
                            class="_rsi-buy-now-button-subtitle">PRESIONA AQUI</span></span><svg
                        xmlns="http://www.w3.org/2000/svg" width="31.200000000000003px" viewBox="0 0 24 24"
                        class="_rsi-button-icon _rsi-button-icon-right" fill="rgba(0,0,0,1)">
                        <rect fill="none" height="24" width="24"></rect>
                        <path
                            d="M14.29,5.71L14.29,5.71c-0.39,0.39-0.39,1.02,0,1.41L18.17,11H3c-0.55,0-1,0.45-1,1v0c0,0.55,0.45,1,1,1h15.18l-3.88,3.88 c-0.39,0.39-0.39,1.02,0,1.41l0,0c0.39,0.39,1.02,0.39,1.41,0l5.59-5.59c0.39-0.39,0.39-1.02,0-1.41L15.7,5.71 C15.32,5.32,14.68,5.32,14.29,5.71z">
                        </path>
                    </svg>
            </button></div><input type="hidden" name="rsi_turnstyle_token" value="">

        </form>
        <form id="_rsi-cod-form-modal-upsell"
        class="_rsi-modal-form _rsi-modal-upsell">
        <div class="_rsi-modal-header">
            <div class="_rsi-modal-header-title"> </div>

            <button id="_rsi-cod-form-modal-close-2"
            class="_rsi-modal-close-button" type="button"><svg class="_rsi-icon"
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M0 0h24v24H0V0z" fill="none"></path>
                <path
                    d="M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z">
                </path>
            </svg>
        </button>       
        </div>
        <div class="_rsi-modal-upsell-catch-title" style="color: rgba(0,0,0,1)">¡Felicidades! por tu compra,
            adquiere un PROYECTOR navideño a un EXCELENTE precio</div>
        <div class="_rsi-modal-upsell-info">
            <div
                class="_rsi-modal-upsell-images-slider swiffy-slider slider-nav-dark slider-nav-outside slider-nav-touch slider-nav-autohide slider-nav-nodelay slider-indicators-round slider-indicators-dark slider-item-first-visible

                swiffy-slider slider-nav-visible slider-indicators-outside slider-indicators-highlight
                ">
                <div class="slider-container">
                    <div class="slide-visible"><img class="_rsi-modal-upsell-images-slider-slide"
                            src="https://cdn.shopify.com/s/files/1/0623/0917/1380/files/rn-image_picker_lib_temp_d34166b0-7049-4c59-b1e7-ce555919057c.jpg?v=1695761538 /">
                    </div>
                    <div class=""><img class="_rsi-modal-upsell-images-slider-slide"
                            src="https://cdn.shopify.com/s/files/1/0623/0917/1380/files/rn-image_picker_lib_temp_91f62828-6b4a-4ac2-9366-56c8b11d7851.png?v=1695761690 /">
                    </div>
                </div>
                <button type="button"
                    class=" slider-nav _rsi-modal-upsell-images-slider-arrow _rsi-modal-upsell-images-slider-arrow-prev">
                </button>
                <button type="button"
                    class="slider-nav slider-nav-next _rsi-modal-upsell-images-slider-arrow _rsi-modal-upsell-images-slider-arrow-next">
                </button>
            </div>
            <div class="_rsi-modal-upsell-title">PROYECTOR DE NAVIDAD</div>
            <div class="_rsi-modal-upsell-description">🎄PREPARATE PARA ESTA NAVIDAD Y TEN LA CASA MAS LINDA DE LA
                CUADRA 🎄 ✅ AMBIENTA TU HOGAR COMO MÁS TE GUSTA. ✅ CÓMODO DE USAR Y TRANSPORTAR.. ✅ PUEDES USARLO
                PARA AMBIENTAR TU SALA, CUARTO Y JARDÍN. ⭐ ESPECIFICACIONES:</div>
            <div class="_rsi-modal-upsell-discount">
                <div class="_rsi-modal-upsell-discount-plaque"
                    style="background: rgb(248, 238, 3); color: rgb(3, 3, 3); box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 5px 0px;">
                    - S/. 30.00</div>
            </div>
            <div class="_rsi-modal-upsell-prices"><span class="_rsi-modal-upsell-compare-at-price">S/.
                    89.00</span><span class="_rsi-modal-upsell-price" style="color: rgba(0,0,0,1)">S/. 59.00</span>
            </div>
            <div class="_rsi-modal-upsell-countdown">
                <div class="_rsi-modal-upsell-countdown-container" style="color: rgba(0,0,0,1)"><span    
                        <span
                        class="_rsi-modal-upsell-countdown-hours">00</span><span
                        class="_rsi-modal-upsell-countdown-minutes">00</span><span
                        class="_rsi-modal-upsell-countdown-seconds">00</span></div>
            </div><input type="hidden" name="id" value="42377927164084"><input type="hidden" name="free_shipping"
                value="true"><input id="_rsi-modal-upsell-discount-value" type="hidden" value="3000"><input
                id="_rsi-modal-upsell-id" type="hidden" value="1696886235555"><input
                id="_rsi-modal-upsell-total-price" type="hidden" value="8900"><input
                id="_rsi-modal-upsell-quantity-input" type="hidden" name="quantity" value="1">
            <div class="_rsi-modal-upsell-variants">
                <div class="_rsi-modal-upsell-variant-selector _rsi-modal-fields-item">
                    <label>Promociones</label><select data-position="1">
                        <option value="1%20x%2089.90">1 x 89.90</option>
                        <option value="2%20und%20%20+%201%20regalo%20%F0%9F%8E%81%20a%20179.80">2 und + 1 regalo 🎁
                            a 179.80</option>
                    </select></div>
            </div>
        </div><button type="button" id="_rsi-modal-submit-button-upsell"
            style="background: rgba(248, 238, 3, 1) !important; color: rgba(3, 3, 3, 1) !important; border-radius: 15px !important; border: 0px solid rgba(0,0,0,1) !important; box-shadow: 0 2px 7px 0px rgba(0, 0, 0, 0.1) !important; font-size: calc(1.05 * 16px) !important;"
            class="_rsi-modal-submit-button _rsi-buy-now-button _rsi-modal-submit-button-upsell _rsi-buy-now-button-shaker _rsi-buy-now-button-shaker-enabled"
            data-animation-type="shake"><span>SI QUIERO OFERTA!!!</span><svg xmlns="http://www.w3.org/2000/svg"
                width="25.200000000000003px" viewBox="0 0 24 24" class="_rsi-button-icon _rsi-button-icon-right"
                fill="rgba(3, 3, 3, 1)">
                <rect fill="none" height="24" width="24"></rect>
                <path
                    d="M14.29,5.71L14.29,5.71c-0.39,0.39-0.39,1.02,0,1.41L18.17,11H3c-0.55,0-1,0.45-1,1v0c0,0.55,0.45,1,1,1h15.18l-3.88,3.88 c-0.39,0.39-0.39,1.02,0,1.41l0,0c0.39,0.39,1.02,0.39,1.41,0l5.59-5.59c0.39-0.39,0.39-1.02,0-1.41L15.7,5.71 C15.32,5.32,14.68,5.32,14.29,5.71z">
                </path>
            </svg></button><button type="button" id="_rsi-modal-submit-button-upsell-no-thanks"
            style="background: rgba(255,255,255,1) !important; color: rgba(15, 15, 15, 1) !important; border-radius: 17px !important; border: 1px solid rgba(16, 16, 16, 1) !important; box-shadow: 0 2px 7px 0px rgba(0, 0, 0, 0.1) !important; font-size: calc(0.9 * 16px) !important;"
            class="_rsi-modal-submit-button _rsi-buy-now-button _rsi-modal-submit-button-upsell-no-thanks">No
            gracias, no deseo</button>
    </form>
    `;
    }
}

// add modal Espera:
function addModalEspera() {
    var divModal =document.getElementById("_rsi-cod-form-modal")
console.log(divModal);
    if (divModal) {
        divModal.innerHTML += `
        <div id="_rsi-downsells-modal" class="_rsi-downsells-modal">
        <div class="_rsi-downsells-container">
          <div class="_rsi-downsells-title" style="color: rgba(237, 21, 21, 1)">🛑¡Espera Espera!🛑</div>
          <div class="_rsi-downsells-subt" style="color: rgba(224, 18, 18, 1)">Tenemos una oferta para ti!</div>
          <div class="_rsi-downsells-discount">
            <div class="_rsi-downsells-discount-text" style="color: rgba(0,0,0,1">🟢OBTÉN UN DESCUENTO EXTRA DE 10 SOLES SÓLO
              POR HOY EN TU PEDIDO:</div>
            <div class="_rsi-downsells-discount-plaque"
              style="width: calc(135px * 0.8); height: calc(135px * 0.8); clip-path: polygon(50% 0%, 58.64% 9.34%, 70.34% 4.32%, 74.43% 16.37%, 87.16% 16.54%, 86% 29.21%, 97.55% 34.55%, 91.34% 45.65%, 99.73% 55.23%, 89.54% 62.85%, 93.30% 75%, 80.89% 77.82%, 79.39% 90.45%, 66.91% 87.98%, 60.40% 98.91%, 50% 91.57%, 39.60% 98.91%, 33.09% 87.98%, 20.61% 90.45%, 19.11% 77.82%, 6.70% 75%, 10.46% 62.85%, 0.27% 55.23%, 8.66% 45.65%, 2.45% 34.55%, 14% 29.21%, 12.84% 16.54%, 25.57% 16.37%, 29.66% 4.32%, 41.36% 9.34%); background: rgba(248, 238, 3, 1); color: rgba(0,0,0,1);">
              S/. 10.00</div>
          </div>
          <div class="_rsi-downsells-subt" style="color: rgba(0,0,0,1)">¿Quieres aprovechar el descuento de HOY??👇 👇 👇👇
          </div><button type="button" id="_rsi-modal-submit-button-downsell"
            style="background: rgba(61, 255, 44, 1) !important; color: rgba(255,255,255,1) !important; border-radius: 5px !important; border: 5px solid rgba(0,0,0,1) !important; box-shadow: 0 2px 7px 0px rgba(0, 0, 0, 0) !important; font-size: calc(1.3 * 16px) !important;"
            class="_rsi-modal-submit-button _rsi-buy-now-button _rsi-modal-submit-button-upsell _rsi-buy-now-button-shaker"
            data-animation-type="shake"><span> SI🌟 APROVECHARÈ AHORA LOS S/. 10.00 SOLES DE DESCUENTO🌟</span><svg
              xmlns="http://www.w3.org/2000/svg" width="29.900000000000002px" viewBox="0 0 24 24"
              class="_rsi-button-icon _rsi-button-icon-left" fill="rgba(255,255,255,1)">
              <path d="M0 0h24v24H0V0z" fill="none"></path>
              <path
                d="M19.5 8H17V6c0-1.1-.9-2-2-2H3c-1.1 0-2 .9-2 2v9c0 1.1.9 2 2 2 0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h1c.55 0 1-.45 1-1v-3.33c0-.43-.14-.85-.4-1.2L20.3 8.4c-.19-.25-.49-.4-.8-.4zM6 18c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm13.5-8.5l1.96 2.5H17V9.5h2.5zM18 18c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z">
              </path>
            </svg></button><button type="button" id="_rsi-modal-submit-button-downsell-no-thanks"
            style="background: rgba(255,255,255,1) !important; color: rgba(0,0,0,1) !important; border-radius: 50px !important; border: 0px solid rgba(237, 7, 7, 1) !important; box-shadow: 0 2px 7px 0px rgba(0, 0, 0, 0) !important; font-size: calc(0.8 * 16px) !important;"
            class="_rsi-modal-submit-button _rsi-buy-now-button _rsi-modal-submit-button-upsell-no-thanks">No gracias.. quiero
            perder mi descuento de HOY</button>
        </div>
      </div>
    `;
    }
}


var miFirstBoton = document.getElementById("_rsi-buy-now-button");


miFirstBoton.addEventListener("click", function() {

    setTimeout(function() {
        addClassToBoxBuySecond()
    }, 1000); 
    addModal()
    var showModal=document.getElementById("_rsi-cod-form-modal")
    showModal.style.display = "block";
    var secondModal = document.getElementById("_rsi-cod-form-modal-upsell")
    secondModal.style.display = "none";

    // ADD GARANTIA ILIMITADA:
    // Call the function to simulate the checkbox change
    var checkbox = document.querySelector('input[name="tick_ups_visible_checkbox_1684626229929"]');

    checkbox.addEventListener('change', function() {
        var checkoutLines = document.querySelector("._rsi-modal-checkout-lines");
    
        var garantiaValue = 4.90; // Assuming the value of "GARANTÍA ILIMITADA" is fixed at 4.90
    
        var totalElement = document.querySelector('div[data-checkout-line="total"] ._rsi-modal-checkout-line-value');
        var currentTotal = parseFloat(totalElement.textContent.replace('S/. ', ''));
    
        if (this.checked) {
            if (checkoutLines.querySelector('._rsi-modal-checkout-line[data-checkout-line="tick_upsell"]') === null) {
                var newDiv = document.createElement("div");
                newDiv.classList.add("_rsi-modal-checkout-line");
                newDiv.setAttribute("data-checkout-line", "tick_upsell");
                newDiv.setAttribute("data-tick-ups-id", "1684626229929");
                newDiv.innerHTML = '<span class="_rsi-modal-checkout-line-title">GARANTÍA ILIMITADA </span><span class="_rsi-modal-checkout-line-value">S/. ' + garantiaValue.toFixed(2) + '</span>';
                checkoutLines.insertBefore(newDiv, checkoutLines.children[2]);
            }
            currentTotal += garantiaValue;
        } else {
            var garantiaDiv = checkoutLines.querySelector('._rsi-modal-checkout-line[data-checkout-line="tick_upsell"]');
            if (garantiaDiv !== null) {
                checkoutLines.removeChild(garantiaDiv);
            }
            currentTotal -= garantiaValue;
        }
        
        totalElement.textContent = 'S/. ' + currentTotal.toFixed(2);
    });            
        
});

function addClassToBoxBuySecond() {
    var buttonBuyModal = document.querySelectorAll("#_rsi-cod-form-modal-form ._rsi-build-block-submit-button button");    
  
    function toggleClass() {
        buttonBuyModal[0].classList.toggle("_rsi-buy-now-button-shaker-enabled");
    }
    setInterval(toggleClass, 1000); // Toggle class every 0.2 seconds

    // hidden X
    var buttonClose = document.querySelectorAll("#_rsi-cod-form-modal-close")

    buttonClose[0].addEventListener("click", function(e) {
        e.preventDefault();
        addModaButtonClose() 
    })

    addSecondModalInsideDiv(buttonBuyModal)
}

function addSecondModalInsideDiv(buttonBuyModal) {


    buttonBuyModal[0].addEventListener("click", function(e) {
        e.preventDefault();
        //start obligatory

        var requiredFields = document.querySelectorAll('input[required]');

        console.log("requiredFields",requiredFields);
        var formIsValid = true;

        requiredFields.forEach(function(field) {
            if (field.value.trim() === '') {
            formIsValid = false;
            }
        });
    
        if (!formIsValid) {
            e.preventDefault();
            alert('Por favor, completa todos los campos obligatorios.');
        } else {
            // store the data in the local storange
            let formData = {};
            requiredFields.forEach(function(field) {
                formData[field.name] = field.value;
            });
    
            localStorage.setItem('formData', JSON.stringify(formData));
            // Get the value from localStorage
            var retrievedValue = localStorage.getItem('myKey');
            console.log("feli",retrievedValue);
            // end store the data in the local storange


            var secondModal = document.getElementById("_rsi-cod-form-modal-upsell")
            secondModal.style.display = "block";

            var showModal=document.getElementById("_rsi-cod-form-modal-form")
            showModal.style.display = "none";

            let boxContainer = document.querySelector("._rsi-modal-upsell-countdown-container")
            // let days =document.querySelector('._rsi-modal-upsell-countdown-days')
            let hours =document.querySelector('._rsi-modal-upsell-countdown-hours')
            let minutes =document.querySelector('._rsi-modal-upsell-countdown-minutes')
            let seconds =document.querySelector('._rsi-modal-upsell-countdown-seconds')
            countTime(hours,minutes,seconds,boxContainer);

            let arrowPrev = document.querySelector('._rsi-modal-upsell-images-slider-arrow-prev')
            console.log("function prev",arrowPrev);
            arrowPrev.addEventListener("click", function(e) {
                console.log("function prev",arrowPrev);
            })

            // Create WhatsApp URL with form data

            // Assuming your data is stored in localStorage as a JSON string
            const userData = JSON.parse(localStorage.getItem('formData'));
            // Extracting the values
            const { first_name, address } = userData;
            // Get the total value from the HTML
            var totalElement = document.querySelector('div[data-checkout-line="total"] ._rsi-modal-checkout-line-value');
            var totalValue = totalElement.textContent.trim();
            // Remove "S/. " from the totalValue
            totalValue = totalValue.replace('S/. ', '');


            // Constructing the message
            const message = `Hola soy ${first_name} deseo confirmar mi pedido de LEDS SOLARES DE COLORES NAVIDAD con un *costo total de S/.  ${totalValue}* para ${address}. *El tiempo de envío será de 3 a 5 días hábiles después de mi confirmación del pedido*`;

            // Encoding the message for a URL
            const encodedMessage = encodeURIComponent(message);

            // Constructing the final URL
            const whatsappURL = `https://api.whatsapp.com/send?phone=51972198713&text=${encodedMessage}`;
            console.log("whatsappURL",whatsappURL);
            // Button that end buy and send to customer to whatssap :
            let buttonEndBuyAndSecondModal = document.getElementById("_rsi-modal-submit-button-upsell-no-thanks");
            buttonEndBuyAndSecondModal.addEventListener("click",function(){
                window.open(whatsappURL, '_blank');
            })

            let closeSecondModal = document.querySelectorAll("#_rsi-cod-form-modal-close-2");
            closeSecondModal[0].addEventListener("click",function(){
                window.open(whatsappURL, '_blank');
            })

            let selectElement = document.querySelector('select[data-position="1"]');
            console.log("select",selectElement);
            
            var priceContainer = document.getElementsByClassName('_rsi-modal-upsell-prices')[0];
            
            var regularPriceElement = priceContainer.querySelector('._rsi-modal-upsell-price');
            console.log("is selected",regularPriceElement);
            selectElement.addEventListener('change', function() {
              
                var selectedValue = this.value;
               
         

                var compareAtPriceElement = priceContainer.querySelector('._rsi-modal-upsell-compare-at-price');
                

                if (selectedValue === "2%20und%20%20+%201%20regalo%20%F0%9F%8E%81%20a%20179.80") {
                    compareAtPriceElement.innerText = "S/. 179.80";
                    regularPriceElement.innerText = "S/. 149.80";
                } else {
                    compareAtPriceElement.innerText = "S/. 89.00";
                    regularPriceElement.innerText = "S/. 59.00";
                }
            });

            let yesOfferSecondModal = document.querySelectorAll("#_rsi-modal-submit-button-upsell")

            yesOfferSecondModal[0].addEventListener("click", function(){
                const price = document.querySelector('._rsi-modal-upsell-price').textContent;
                const valueFromHTML = parseFloat(price.replace('S/. ', ''));
                console.log(valueFromHTML,"valueFromHTML");
                const totalValue2 = valueFromHTML + parseFloat(totalValue);
                let newTotalValue = totalValue2.toFixed(2);
                console.log("aqui button second total actual",valueFromHTML === 149.8 );

                let newmessage = ``;
                if (valueFromHTML === 149.8) {
                    newmessage = `Hola soy ${first_name} deseo confirmar mi pedido de LEDS SOLARES DE COLORES NAVIDAD, PROYECTOR DE NAVIDAD - 2 und + 1 regalo � a 179.80 con un *costo total de S/.  ${newTotalValue }* para ${address}. *El tiempo de envío será de 3 a 5 días hábiles después de mi confirmación del pedido*`;
                }else{
                    newmessage = `Hola soy ${first_name} deseo confirmar mi pedido de LEDS SOLARES DE COLORES NAVIDAD, PROYECTOR DE NAVIDAD - 1 x 89.90 con un *costo total de S/.  ${newTotalValue }* para ${address}. *El tiempo de envío será de 3 a 5 días hábiles después de mi confirmación del pedido*`;
                }
                // Constructing the message
                
                // Encoding the message for a URL
                let newEncodedMessage = encodeURIComponent(newmessage);

                // Constructing the final URL
                let newWhatsappURL = `https://api.whatsapp.com/send?phone=51972198713&text=${newEncodedMessage}`;
                // console.log("whatsappURL",newWhatsappURL);
                window.open(newWhatsappURL, '_blank');
            })



            // class to shake 

            function toggleClass() {
                yesOfferSecondModal[0].classList.toggle("_rsi-buy-now-button-shaker-enabled");
            }
            setInterval(toggleClass, 1000); // Toggle class every 0.2 seconds

            // end class to shake 
           
     
        }
        //end obligatory
    });
}

function addModaButtonClose() {
    setTimeout(function() {
        addClassShakeToModalEspera()
    }, 1000); 
    addModalEspera();

    let closeModal = document.querySelectorAll("#_rsi-modal-submit-button-downsell-no-thanks")
    closeModal[0].addEventListener("click", function(){
        let showModal=document.querySelectorAll("#_rsi-cod-form-modal")
            showModal[0].remove();
        console.log("closeModal",showModal[0])
    })
}


function addClassShakeToModalEspera() {
    //add class of shake inside box X close
    let addClaseShakeInsideModalButtonClose = document.getElementById("_rsi-modal-submit-button-downsell")
    console.log("inside box x",addClaseShakeInsideModalButtonClose);
    function toggleClass() {
        addClaseShakeInsideModalButtonClose.classList.toggle("_rsi-buy-now-button-shaker-enabled");
    }
    setInterval(toggleClass, 1000); // Toggle class every 0.2 seconds

    addSecondModalInsideDiv(buttonBuyModal)
}


// end add first and second modal:
addClassToBoxBuy()


// puting count time

function countTime(countHours, countMinutes, countSeconds, boxContainer) {
    const duration = 3 * 60 * 1000; // 3 minutos en milisegundos
    const startTime = new Date().getTime();
    const endTime = startTime + duration;

    const timer = () => {
        const currentTime = new Date().getTime();

        if (currentTime >= endTime) {
            // El tiempo ha terminado.
            boxContainer.style.display = 'none';
            clearInterval(intervalId);
            return;
        }

        let difference = endTime - currentTime;

        let hours = Math.floor(difference / (1000 * 60 * 60));
        let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((difference % (1000 * 60)) / 1000);

        // Adding the zeros.
        hours <= 9 ? (hours = `0${hours}`) : hours;
        minutes <= 9 ? (minutes = `0${minutes}`) : minutes;
        seconds <= 9 ? (seconds = `0${seconds}`) : seconds;

        countHours.textContent = hours;
        countMinutes.textContent = minutes;
        countSeconds.textContent = seconds;
    };

    timer();
    // Calling the function every 1000 milliseconds.
    const intervalId = setInterval(timer, 1000);
}

// Llamar a la función y pasar los elementos correspondientes
countTime(
    document.getElementById('horas'),
    document.getElementById('minutos'),
    document.getElementById('segundos'),
    document.getElementById('contenedor')
);




// en put ing count time

