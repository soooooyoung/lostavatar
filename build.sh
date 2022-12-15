
react-scripts build 
rm build.zip
zip -r build.zip build 
scp -i ~/.ssh/grati.key build.zip ubuntu@193.123.255.20:~/build.zip

