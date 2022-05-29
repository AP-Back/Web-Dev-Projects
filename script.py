# import nltk
# import text2emotion as te
# from selenium.webdriver.support.ui import WebDriverWait
# from selenium.webdriver.support import expected_conditions as EC
# from selenium.webdriver.common.by import By
# from selenium.webdriver.common.keys import Keys
# from pytesseract import pytesseract
# from PIL import Image
# from time import sleep
# import time
# import undetected_chromedriver.v2 as uc
import sys
import requests
import os
# os.system("npm i")
# os.system("pip3 install -r requirements.txt")

# nltk.download('omw-1.4')


HOST_URL = 'http://localhost:3000/'


def submit_form(var1, var2, var3):
    obj = {'current_mood': var1, 'user_name': var2, 'score': var3}
    resp = requests.post(HOST_URL, data=obj)

# data extraction ------------------------------------------------------------------------------------------------------------


if __name__ == '__main__':

    # flag1 = 0
    # username = ""
    # useremail = ""
    # userpass = ""
    # with open("user_auth.txt", "r") as file:
    #     data = file.readlines()
    #     for line in data:
    #         word = line.split()
    #         a = word
    #         if(flag1 == 0):
    #             username = a[0]
    #         elif(flag1 == 1):
    #             useremail = a[0]
    #         else:
    #             userpass = a[0]
    #         flag1 += 1

    # if(username == ""):
    #     file.close()
    #     file = open(r"user_auth.txt", "a")
    #     print("---------- This is the first time initialisation ----------\n")
    #     print("---------- Please enter your username and password ----------\n")
    #     print("---------- NOTE : You wont be asked to enter your credentials in future ----------\n\n\n")
    #     print("Enter your name : ")
    #     username = input()
    #     print("Enter user email :  ")
    #     useremail = input()
    #     print("Enter password :  ")
    #     userpass = input()

    #     file.write(username+'\n')
    #     file.write(useremail+'\n')
    #     file.write(userpass)
    #     file.close()

    # path_to_tesseract = r"C:\Program Files\Tesseract-OCR\tesseract.exe"

    # driver = uc.Chrome(version_main=102)
    # driver.delete_all_cookies()
    # driver.get('https://accounts.google.com/ServiceLogin')
    # sleep(2) 

    # driver.find_element_by_xpath('//input[@type="email"]').send_keys(useremail)
    # driver.find_element_by_xpath('//*[@id="identifierNext"]').click()

    # sleep(2)

    # driver.find_element_by_xpath('//input[@type="password"]').send_keys(userpass)
    # driver.find_element_by_xpath('//*[@id="passwordNext"]').click()

    # sleep(2)

    # driver.get('https://myactivity.google.com/myactivity')

    # sleep(5)

    # list1 = ""
    # last_scroll_pos = 0
    # fl1 = 1
    # mf1 = 1
    # while (mf1 < 1500):
    #     WebDriverWait(driver, 10).until(EC.presence_of_element_located(
    #         (By.CSS_SELECTOR, 'body'))).send_keys(Keys.DOWN)
    #     if(fl1 % 3 == 0):
    #         driver.get_screenshot_as_file("sample1.png")
    #         img = Image.open("sample1.png")
    #         pytesseract.tesseract_cmd = path_to_tesseract
    #         text = pytesseract.image_to_string(img)
    #         list1 += text

    #     sleep(.01)
    #     mf1 += 1
    #     current_scroll_pos = str(
    #         driver.execute_script('return window.pageYOffset;'))
    #     if current_scroll_pos == last_scroll_pos:
    #         print('scrolling is finished')
    #         break
    #     last_scroll_pos = current_scroll_pos
    #     fl1 += 1
    # sleep(5)

    # m1 = list1
    # t1 = "Watched"
    # t2 = "Searched"
    # t3 = "Viewed"
    # t4 = "Visited"
    # f11 = 0
    # m11 = 0
    # mlist = []
    # b11 = 0
    # k11 = 1
    # mf1 = 0
    # for i in range(0, len(m1)):
    #     if(m1[i] == 'W'):
    #         k = i
    #         for j in range(0, 7):
    #             if(m1[k] == t1[j]):
    #                 mf1 = 1
    #             else:
    #                 mf1 = 0
    #                 break
    #             k += 1
    #         if(mf1 == 1):
    #             str1 = ""
    #             sp1 = 1
    #             mp1 = 0
    #             for j in range(k, len(m1)):
    #                 if(m1[j] != '\n'):
    #                     if(m1[j].isalpha()):
    #                         str1 += m1[j]
    #                         sp1 = 1
    #                         mp1 = 1
    #                     elif(m1[j] == " " and sp1 == 1 and mp1 == 1):
    #                         str1 += " "
    #                         sp1 = 2
    #                 else:
    #                     i = j
    #                     if(len(str1)>0):
    #                             if(str1[-1] == " "):
    #                                     i1 = len(str1)
    #                                     mlist.append(str1[0:i1-1])
    #                     break
    # f11 = 0
    # m11 = 0
    # b11 = 0
    # k11 = 1
    # mf1 = 0
    # for i in range(0, len(m1)):
    #     if(m1[i] == 'S'):
    #         k = i
    #         for j in range(0, 8):
    #             if(m1[k] == t2[j]):
    #                 mf1 = 1
    #             else:
    #                 mf1 = 0
    #                 break
    #             k += 1
    #         if(mf1 == 1):
    #             str1 = ""
    #             sp1 = 1
    #             mp1 = 0
    #             for j in range(k, len(m1)):
    #                 if(m1[j] != '\n'):
    #                     if(m1[j].isalpha()):
    #                         str1 += m1[j]
    #                         sp1 = 1
    #                         mp1 = 1
    #                     elif(m1[j] == " " and sp1 == 1 and mp1 == 1):
    #                         str1 += " "
    #                         sp1 = 2
    #                 else:
    #                     i = j
    #                     if(len(str1)>0):
    #                             if(str1[-1] == " "):
    #                                     i1 = len(str1)
    #                                     mlist.append(str1[0:i1-1])
    #                     break
    # f11 = 0
    # m11 = 0
    # b11 = 0
    # k11 = 1
    # mf1 = 0
    # for i in range(0, len(m1)):
    #     if(m1[i] == 'V'):
    #         k = i
    #         for j in range(0, 6):
    #             if(m1[k] == t3[j]):
    #                 mf1 = 1
    #             else:
    #                 mf1 = 0
    #                 break
    #             k += 1
    #         if(mf1 == 1):
    #             str1 = ""
    #             sp1 = 1
    #             mp1 = 0
    #             for j in range(k, len(m1)):
    #                 if(m1[j] != '\n'):
    #                     if(m1[j].isalpha()):
    #                         str1 += m1[j]
    #                         sp1 = 1
    #                         mp1 = 1
    #                     elif(m1[j] == " " and sp1 == 1 and mp1 == 1):
    #                         str1 += " "
    #                         sp1 = 2
    #                 else:
    #                     i = j
    #                     if(len(str1)>0):
    #                             if(str1[-1] == " "):
    #                                     i1 = len(str1)
    #                                     mlist.append(str1[0:i1-1])
    #                     break

    # f11 = 0
    # m11 = 0
    # b11 = 0
    # k11 = 1
    # mf1 = 0
    # for i in range(0, len(m1)):
    #     if(m1[i] == 'V'):
    #         k = i
    #         for j in range(0, 7):
    #             if(m1[k] == t4[j]):
    #                 mf1 = 1
    #             else:
    #                 mf1 = 0
    #                 break
    #             k += 1
    #         if(mf1 == 1):
    #             str1 = ""
    #             sp1 = 1
    #             mp1 = 0
    #             for j in range(k, len(m1)):
    #                 if(m1[j] != '\n'):
    #                     if(m1[j].isalpha()):
    #                         str1 += m1[j]
    #                         sp1 = 1
    #                         mp1 = 1
    #                     elif(m1[j] == " " and sp1 == 1 and mp1 == 1):
    #                         str1 += " "
    #                         sp1 = 2
    #                 else:
    #                     i = j
    #                     if(len(str1)>0):
    #                             if(str1[-1] == " "):
    #                                     i1 = len(str1)
    #                                     mlist.append(str1[0:i1-1])
    #                     break
    # res_list = mlist

    # sleep(3)

    

    # # emotion detection

    # Happy = 0
    # Sad = 2
    # for text in res_list:
    #     a = te.get_emotion(text)
    #     max1 = 0
    #     key_m = "neutral"
    #     for k, v in a.items():
    #         if(v > max1):
    #             max1 = v
    #             key_m = k
    #     if(key_m == "Happy"):
    #         Happy += 1
    #     elif(key_m == "Angry"):
    #         Sad += 1
    #     elif(key_m == "Surprise"):
    #         Sad += 1
    #     elif(key_m == "Sad"):
    #         Sad += 1
    #     elif(key_m == "Fear"):
    #         Sad += 1
    #     else:
    #         Happy += 1

    # user_current_mood = ""
    # tscore = 0
    # if(Happy > Sad):
    #     user_current_mood = "Happy"
    #     tscore = Happy/(Happy+Sad)
    #     tscore = tscore*10

    # else:
    #     user_current_mood = "Sad"
    #     tscore = Sad/(Happy+Sad)
    #     tscore = tscore*10

    # submit_form(user_current_mood, username, round(tscore, 2))
    submit_form("Happy","Nishanth",9.1)

    sys.exit()
