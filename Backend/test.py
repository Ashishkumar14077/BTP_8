import sys
import pickle

model = pickle.load(open('rfmodel.pkl','rb'))
print(model.predict([[3,1,0.14,5819,1380]]))
# Takes first name and last name via command 
# line arguments and then display them

print("Output from Python")
# print("First name: " + sys.argv[1])
# print("Last name: " + sys.argv[2])
  