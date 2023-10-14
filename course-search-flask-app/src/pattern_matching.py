
courses = ['CSE2012-Design and Analysis of Algorithm-4-Embedded Theory and Lab', 
'CSE2001-Computer Architechture and Organization-3-Theory Only', 
'CSE2004-Database Managemant System-4-Embedded Theory and Lab', 
'CSE2005-Operating System-4-Embedded Theory and Lab', 
'STS2001-Numerical Ability-1-Theory Only', 
'MAT2002-Application of Derivative-4-Embedded Theory and Lab',
'CSE1003-Digital Logic and Design-4-Embedded Theory and Lab',
'CSE1004-Network and Communication-4-Embedded Theory and Lab',
'CSE1007-Java Programming-4-Embedded Theory and Lab',
'CSE2001-Computer Architecture and Organization-3-Theory Only',
'CSE2004-Database Management Systems-4-Embedded Theory Lab and Project',
'CSE2005-Operating Systems-4-Embedded Theory and Lab',
'CSE2006-Microprocessor and Interfacing-4-Embedded Theory Lab and Project',	
'CSE2011-Data Structures and Algorithms-4-Embedded Theory and Lab',
'CSE2012-Design and Analysis of Algorithms-4-Embedded Theory and Lab',
'CSE2013-Theory of Computation-3-Theory Only',
'CSE3001-Software Engineering-4-Embedded Theory Lab and Project',
'CSE3002-Internet and Web Programming-4-Embedded Theory Lab and Project',
'CSE4001-Parallel and Distributed Computing-4-Embedded Theory Lab and Project',
'MAT1014-Discrete Mathematics and Graph Theory-4-Theory Only',
'CSE1006-Blockchain and Cryptocurrency Technologies-3-Theory Only',
'CSE2014-Compiler Design-4-Embedded Theory and Lab',
'CSE3006-Embedded System Design-4Embedded Theory and Lab',
'MAT2002-Applications of Differential and Difference Equations-4-Embedded Theory and Lab',
'CSE3011-Robotics and its Applications-4-Embedded Theory and Lab',
'CSE3013-Artificial Intelligence-4-Embedded Theory and Project',
'CSE3016-Computer Graphics and Multimedia-4-Embedded Theory Lab and Project',
'CSE3018-Content Based Image and Video Retrieval-4-Embedded Theory Lab and Project',
'CSE3020-Data Visualization-4-Embedded Theory Lab and Project',
'CSE3021-Social and Information Networks-4-Embedded Theory and Project',
'CSE3024-Web Mining-4-Embedded Theory and Lab',
'CSE3025-Large Scale Data Processing-4-Embedded Theory Lab and Project',
'CSE3029-Game Programming-4-Embedded Theory, Lab and Project',
'CHY1701-Engineering Chemistry-4-Embedded Theory and Lab',
'ENG1901-Technical English-I-2-Lab Only',
'ESP1001-ESPANOL FUNDAMENTAL-2-Theory Only',	
'FRE1001-Francais quotidien-2-Theory Only',
'GER1001-Grundstufe Deutsch-2-Theory Only',
'HUM1021-Ethics and Values-2-Theory Only',
'JAP1001-Japanese for Beginners-2-Theory Only',
'MAT1011-Calculus for Engineers-4-Embedded Theory and Lab',
'PHY1701-Engineering Physics-4-Embedded Theory and Lab',
'STS1001-Introduction to Soft Skills-1-Soft Skill',
'STS1201-Introduction to Problem Solving-1-Soft Skill',
'CSE1902-Industrial Internship-1-Project',
'BCD3001-Bayesian Data Analysis-4-Embedded Theory and Project',
'BCI2002-Image Processing-4-Embedded Theory and Project',
'BCT3001-Wireless Ad-hoc and Sensor Networks-4-Embedded Theory and Project',
'BIT1002-Biostatistics-3-Theory Only',
'CBS1002-Object Oriented Programming-4-Embedded Theory and Lab',
'CBS1006-Principles of Operating Systems-3-Embedded Theory and Lab',
'CHE1004-Chemical Technology-3-Theory Only',
'EXC1001-Service to the Society-2-Extra Curricular Activity',
'EXC1002-Youth Red Cross-2-Extra Curricular Activity',		
'CHY1002-Environmental Sciences-3-Theory Only',
'BIT1001-Introduction to Life Sciences-4-Theory Only']

result = ''

def computeLPSArray(pat, m, lps):
    len = 0
    i = 1
    lps[0] = 0
    while (i < m):
        if (pat[i] == pat[len]):
            lps[i] = len + 1
            len += 1
            i += 1
        else:
            if(len != 0):
                len = lps[len -1]
            else:
                lps[i] = 0
                i += 1

def KMPSearch(pat, txt):
    N = len(txt)
    M = len(pat)
    lps = [0]*M
    
    computeLPSArray(pat, M , lps)
    i=j=0
    while (i < N-M+1):
        if(txt[i] == pat[j]):
            i += 1
            j += 1
        else:
            if (j != 0):
                j = lps[j-1]
            else:
                i += 1
        
        if (j == M):
            print('Match Found',i-j)
            # print(txt.split("-")[0])
            # print(txt.split("-")[1])
        
            j = lps[j-1]
            
            return True

def find(courseId):
    for i in courses:
        if(KMPSearch(courseId, i) == True):
            result = i
            course = []
            for i in range (0, 4):
                course.append(result.split("-")[i])
            result = course
            break
        else:
            result = 'Wrong Course Code'
            continue

    return result

# if __name__ == "__main__":
#     print(find('CSE2012')) #.split("-")[0]
#     # print(txt.split("-")[0])
#     # print(txt.split("-")[1])