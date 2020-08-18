if [ "$BRAND" == "payex" ]; then
    echo ::set-output name=BRAND_NAME::PayEx
    echo ::set-output name=BRAND_URL::https://payexdesignguidetest.z6.web.core.windows.net
    echo ::set-output name=AZURE_ACCOUNT::payexdesignguidetest
    echo ::set-output name=BUILD_SCRIPT::build:prod:payex
elif [ "$BRAND" == "swedbankpay" ]; then
    echo ::set-output name=BRAND_NAME::SwedbankPay
    echo ::set-output name=BRAND_URL::https://swedpaydesignguidetest.z6.web.core.windows.net
    echo ::set-output name=AZURE_ACCOUNT::swedpaydesignguidetest
    echo ::set-output name=BUILD_SCRIPT::build:prod
else
    echo "Unknown brand '$BRAND'!"
fi
