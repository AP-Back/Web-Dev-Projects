from flask import Flask, request, render_template
from src import pattern_matching

app = Flask(__name__, template_folder='./src/template')

@app.route("/", methods= ['GET', 'POST'])
def home():
    try:
        courseId = request.form.get("code")
        result1 = pattern_matching.find(courseId)
    except:
        result1 = ["NA", "NA", "NA", "NA"]
    
    # courseId =  'CSE2005'
    # result1 = pattern_matching.find(courseId)
    if (result1 == 'Wrong Course Code'):
        return render_template ("index.html", n = ["Not Found", "NA", "NA", "NA"], cid = courseId)
    return render_template("index.html", n = result1, cid = courseId)

app.run(debug=True)