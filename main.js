let text = document.getElementById('text');
 let currentFontSize = 16;

      
        document.getElementById('Btn1').onclick = function() {
            text.textContent = "Text change";
        }

        
        document.getElementById('Btn2').onclick = function() {
            currentFontSize += 2;
            text.style.fontSize = "large";
        }

      
        document.getElementById('Btn3').onclick = function() {
                text.style.fontSize = "small" ;
            }
    

       
        document.getElementById('Btn4').onclick = function() {
            text.style.color = "crimson";
        }

        
        document.getElementById('Btn5').onclick = function() {
            text.style.backgroundColor = "brown";
        }

        document.getElementById('Btn6').onclick = function(){
             document.getElementById("img1").src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABR1BMVEX////w8PAyMjL5+fns7OxbW1v8/PxjY2Pp6en4+Pi2trbj4+NFRUXz8/PAwMAcHBza2tppaWl7e3tNTU2oqKiZmZnU1NSjo6PJyclYWFg3NzctLS23t7eDg4PV1dVkZGQ/Pz+SkpIdHR0nJycAAAB13NaFwt11dXVKSkrr+Pl+xduBgYFr39N1z9do5NF+utzQ9+8QEBCIud912tawruzp4/qSrOOQseLVs/i2jPG47eiN59yk5OOS2t6U0OB4ydmz1Ol96tbU5PPj8PfL7u+e7+CeueWsyuip3+Wq8OPJ1PCOo+Ph6Pe1vOyH2NuTmuXGyvDa9vOWkOeXv+O76Oqfi+rVyvaiquixlu/h2vixqO318f2kfuyN4tymfO3Bn/Orb/DWuvjDivWyW/OyZ/LOmPjR2/Ow2ujt3/ytc/CRneTLs/S6nvFZdcmoAAAITUlEQVR4nO2Z+1vTaBbHT3pJ0+bSW9ImTQtpq7RcWkZKqXhfcHUWYVAUZrCI6CCis///z3veJL1Q3ZFxyrjjfj/PQ5O+aZL3m3N5zwlEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgP8Hbt3+1jO4Yu5cX1qa/9aTuErudjrXl9rfscS7rdY83f5eJJaNT4bu3W8Jbd+JxFRBnxx6sHA/6u/cbrflv3xCPslE9KvOMz81F6US1sTIg+U5Nt0PIpfebv/jq270JeRZo7j4ez+I3Zh8tIW4nvjM9CeIpz4dK6sTNtxYWd4kenh9iSXKS+1/fvGqX4GcMIqN3/tBLD2p0PZi8S8rTAwUSoYx9AKnfOE3em9lg2izxbmUxc232z9cbtJ/ik9i4VOFX0L1TwgVSos1LTs8NPFkHvUei82PQuK/2FnbV5NtMsXK6EuuKGaVakjDkVChWpgZWiJj5sKZVkObzIQGqxT4I9EUvhgoLNeryti9LircWuvx572H9GOnsyTsdyWhqMTTmjv6mi9StJL2IpnhiFAoF91I06uZ4Rm1RD5UFBpKrdVsf0ebEWfEm+EhuTLLj0oWfEZh8snatsg1C0Kiv+bLU/bTGM845jZUJZ0cV+h4NjmjmcTSNFOKZ3iKRlqYQ3KzClUvKvTsaiI4fcbfNK3gUOaGVgrRqslJhTtPdoi2V5bnFjbpp46fbW6129NUmOPnLmampNWRQrNQUy4kwlg9dWOgR/hkVRiockGhVaFMWh9TaNf14JCiDrATrnJR4fbuRxa9uSIkzss/Dfz01vQEynX+aFiTCg2PN3FzOCJFXDvcrYogrcbHFM4KzVHWE03bYwopbQSPY5ycdlHh6u5TDkVZfr4yt3Cf5oWfEj2bphGlEn+Y3oyeqdsxJUBvFpUbZSkZr6qZENst6sFBqSLWazttxKRcUfJHEqYu6ZbrlclL8YiuFUiVJCkaKdIsHxpHV1xjXGF/b1em7Y9rfXrORrxHL4J8Ok0jKsKGVNVKnuZpAxJJKuc5avLxIdlEuONk/XyRyrtxqxTx0TwOMUcpe3wN/upmSUr7UZehbGSSZmw8vlf3OApXP4psIyS+IOGnwojTS6fJ9GBJqBcmjzn25MgXMCZ98vOMltb+/l6f6Onuk7W1DXrOfjov/JTtt9R+9gfv/d/JhbWMVQ9vPJNKWn7CMEuXu4Kp2mO12fD0y3Cw/5KoS/2fhUR5WYSi8FNOp0vTq92SjlY1zWKiNjDYYi1zjc1Z1lz1d08ccs2qjD2LxbR/+uX4Zf+QaP9llNeMtd7GJkt8SLzuP6P5pWn2GHbRsqziqOjQSSxamfJluwldpvGfBqdfiv7REdHh0f5el86ExI1lNuLDzvVXRK+W/orq9Mo5OGYnpe4v+3uHtP2k19t+MLfwXiQbmV6IlPr35/XxAfVv9ulgj1Nqf63X25ybW5DZiOymIhqnAnc1hm0YBfIzeNIg29+xREmqi5VP97OInBJhYVcaxZFDzsSCrW1ZQeAV/IEy+7zpr/mmJZCpGKTraDF8f6EUwyscH7O6D8e/ReWXeztP19a4jVpmI7Y6d4g603rxlmksZrVKzlQj/mQdKoisoaZFp5ESabbhFzPSNVaYjVipRn1Qjtuu3w/pec8ynfhoINdIpYr5LD+JfMXkHCZTM2iurYis1PyGI1wPuyfrRG9Ojo+O3qzu7XI+7W095mRDL1qvxMvF6QWiLSamemK3wAWqyxKKDaEzyzNRtIKYvcS9RdXx7eiGiSRhOCI7OTn/RDFg+wM5v9ar8EXzYXp2/KciRTSZLBZrx8MbH5y85s/+m/X1/f29g52tnbWezvXphtzqEK8ad6am0LioUFRlWiZeIF30hBWTPDVQ6AbWCxSQ6pLBhi64g6yeiVCqSmFzSVEu3fPhqpG3HDFuebL//LzBKnTz5A3Jb8/P149YYvfpztmZvLXC9en7u615etZ5dVUKCx6pJTIr/rjuRim16CuMuUEIpoISYZGFeElKDVt3oTwSHSikuE1xLgA9Hm2qXJtn8lJJNF/OqNV+d3pA3V9P2U1ZYX/1cHfnjENRrPuthzQvDDl9hbZo8NxYsUpKiRpcg5mLSUlxdaFQrwelSjBDqa7qyapJ5UR4Fb3GA6LbCBU2Zyhf5lpeFwrZ4E5BighzJ0rDXPX29Jz6705PP/gSD19unYlkIyTe4z641Znamu8rlOoivEwRVBXTYX90CiyMPCefz2um76VhM6X50VXU+ICjcWsc1rWWGMjnB148Ux/FYTPD3VaDYsKGlMoNb3x62heb8zev14+ODvZ3V3e5BH/0+MGmL63VmtrrGl8hxTmG9JKYk+2J9tZs8rAxKw6xBYRCNc1zVxKBk9b8lYE1VLlZILUi132lTVvYUE4adc5SgzhkhXpaoZhvQ3Nc4bvzcFfud7uHh93t/sBu8++nqdDPbclZV6sFDuZvYqKnbwZWcAxdrBZqtu5qgSHD8CvzqVa6mb9RHQ0s1ms1NyuyksN7tWsKeUGKitWFf5qjt5Zvfz09PXl92J+ckLzJtc3C/ekpTIYlaUwN14EgUJLhn7hldLBnOYpSYbHJ8Fn7P8rw2j8Y4EY/GY0GX6KC5PAqwVYeq2G7r1niyYf1mweH3b54U9Xvb589fsShuDz3fnNa+v4gxvAN23Q4v/n2w4djXvR5Sdzb5UDkPqr3/MG3knc1yOcHv/17P1T489Ot7a/7F8nfgOH7VAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP4H+A8S2POHfJcQAAAAAABJRU5ErkJggg=="
        }