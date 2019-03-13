echo "checkout Docker Environment....."

docker version

echo "Checkout Local Docker Images List......"

docker images

echo "Checkout Local Docker Container List...."

docker container ls -a

echo "Delete Docker Container..."

docker container rm -f lavector-wechat-web
rm -fr lavector-wechat-web.tar

echo "Delete Docker iamge ...."

docker rmi -f lavector/lavector-wechat-web-image

echo "===========Begin Build Docker Image============"

docker build -t lavector/lavector-wechat-web-image .

echo "========== Build Docker Image END=============="

echo "===========Begin Build Docker Container============"

docker run -d -p 80:80 --name lavector-wechat-web  lavector/lavector-wechat-web-image

echo "Build Docker Container Success! please open your browser!"

# echo "Export Docker Container....."

# docker export lavector-wechat-web > lavector-wechat-web.tar

# echo "Export Docker Container Success!"