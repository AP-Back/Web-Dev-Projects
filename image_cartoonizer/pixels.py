from PIL import Image
import os
from PIL.Image import core as _imaging

PATH = "C:\\Users\\Nishanth VM\\rev1\\pre_images\\"
Copy_to_path="C:\\Users\\Nishanth VM\\rev1\\images\\"
 

for filename in os.listdir(PATH):
    img = Image.open(os.path.join(PATH, filename)) # images are color images
    img = img.resize((256,256), Image.ANTIALIAS)
    img.save(Copy_to_path+filename+'.jpg') 

    