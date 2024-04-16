import matplotlib.pyplot as pt
import numpy as np
from flask import Flask, request, jsonify,send_from_directory

app = Flask(__name__)

@app.route("/tracking",methods=["POST"])
def python_script():
  data1 = request.get_json()
  # Do something with the data
  print(data1)
  return jsonify({"success": True})
print("4")
if __name__ == "__main__":
  app.run(debug=True)
   
@app.route('/favicon.ico')
def favicon():
    return send_from_directory(app.root_path, 'favicon.ico', mimetype='image/vnd.microsoft.icon')





'''x=np.array([22324,23324,24324,25324,26324,27324,28324,29324,30324,31324,1424,2424,3424,4424,5424])
y=np.array([640,700,511,640,845,755,810,815,915,935,715,700,715,745,715])
#x=np.append(x,int(input("enter the date ")))
#y=np.append(y,int(input("enter the time")))
pt.plot(x,y,marker='o')
pt.title('waking tracking')
pt.xlabel('date')
pt.ylabel('time')
pt.show()
x1=np.array([26324,27324,28324,29324,30324,31324,1424,2424,3424,4424,5424])
y2=np.array([0,3,0,6,0,10,0,0,0,0,10])
pt.plot(x1,y2,marker='o')
pt.title('exercise tracking')
pt.show()'''
