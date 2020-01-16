if [ "$BRAND" == "payex" ]; then
    echo ::set-env name=BRAND_URL::https://payexdesignguide.z16.web.core.windows.net
    echo ::set-env name=BRAND_BUILD:::payex
elif [ "$BRAND" == "swedbankpay" ]; then
    echo ::set-env name=BRAND_URL::https://swedbankpaydesignguide.z16.web.core.windows.net
    # Swedbank Pay brand doesn't need a brand build variable
else
    echo "Unknown brand!"
fi