echo Hello from within script... does script have brand? $BRAND

echo $BRAND_NAME

if [ "$BRAND" == "payex" ]; then
    echo ::set-env name=BRAND_NAME::PayEx
    echo ::set-env name=BRAND_URL::https://payexdesignguide.z16.web.core.windows.net
elif [ "$BRAND" == "swedbankpay" ]; then
    echo ::set-env name=BRAND_NAME::Swedbank Pay
    echo ::set-env name=BRAND_URL::https://swedbankpaydesignguide.z16.web.core.windows.net
else
    echo "Unknown brand!"
fi