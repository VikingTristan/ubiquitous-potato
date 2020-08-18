if [ "$BRAND" == "payex" ]; then
    echo ::set-output name=BRAND_NAME::PayEx
    echo ::set-output name=BRAND_URL::https://payexdesignguide.z6.web.core.windows.net
    echo ::set-output name=AZURE_ACCOUNT::payexdesignguide
    echo ::set-output name=BUILD_SCRIPT::build:prod:payex
elif [ "$BRAND" == "swedbankpay" ]; then
    echo ::set-output name=BRAND_NAME::SwedbankPay
    echo ::set-output name=BRAND_URL::https://swedpaydesignguide.z6.web.core.windows.net
    echo ::set-output name=AZURE_ACCOUNT::swedbankpaydesignguide
    echo ::set-output name=BUILD_SCRIPT::build:prod
else
    echo "Unknown brand '$BRAND'!"
fi
