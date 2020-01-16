echo Hello from within script... does script have brand? $BRAND
echo ::set-env name=BRAND_NAME::$BRAND
echo ::set-env name=BRAND_URL::testurl
echo $BRAND_NAME

if [ "$BRAND" -eq "payex" ]; then
    echo "We should do payex things now!"
elif [ "$BRAND" -eq "swedbankpay" ]; then
    echo "We should do swedbank pay things now!"
else
    echo "Unknown brand!"
fi