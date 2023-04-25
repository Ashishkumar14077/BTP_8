import sys
import pickle

model = pickle.load(open('rfmodel.pkl','rb'))
dollarVal = model.predict([[sys.argv[1],sys.argv[2],sys.argv[3],sys.argv[4],sys.argv[5]]])
print(dollarVal/60000.0)

# print([sys.argv[1],sys.argv[2],sys.argv[3],sys.argv[4],sys.argv[5]])
# print(model.predict([[4,2,0.14,5812,13490]]))
# bed
# bath
# acreLot
# zipcode
# houseSize
# Takes first name and last name via command 
# line arguments and then display them
# print("Output from Python")
# print("Bed : " + sys.argv[1])
# print("Address : " + sys.argv[2])
  