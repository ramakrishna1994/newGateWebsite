CREATE TABLE IF NOT EXISTS `toc0102` (
  `questionNo` int(11) NOT NULL DEFAULT '0',
  `question` mediumtext,
  `optionA` varchar(1000) DEFAULT NULL,
  `optionB` varchar(1000) DEFAULT NULL,
  `optionC` varchar(1000) DEFAULT NULL,
  `optionD` varchar(1000) DEFAULT NULL,
  `answer` varchar(10) NOT NULL,
  `marks` int(11) NOT NULL,
  `isNumerical` int(11) DEFAULT NULL,
  `isImage` int(11) DEFAULT NULL,
  `imagePath` varchar(1000) DEFAULT NULL,
  `solution` mediumtext NOT NULL,
  PRIMARY KEY (`questionNo`)
);

insert into toc0102 values (1,'Which of the following is TRUE?   ','Every subset of a regular set is regular. 	','Every finite subset of a non-regular set is regular.','The union of two non-regular sets is not regular. 	',' Infinite union of finite sets is regular','B',1,0,0,'none','Will be updated'),
(2,'A minimum state deterministic finite automaton accepting the language L={W | W ? {0,1} *, number of 0s and 1s in are divisible by 3 and 5, respectively} has','15 states 	','11 states 	','10 states 	','9 states 	','A',2,0,0,'none','<div class="mtq_explanation-label">Question 17 Explanation:&nbsp;</div><div class="mtq_explanation-text"> For strings of 0s and 1s to be divisible by 3 and 5 both , it has to be a multiple of 3 * 5 = 15. 
<br>
So, strings accepted by the automata have to be of length 15, 30, 45 ……
<br>&nbsp;<br>
Therefore, Finite state automata for such language has 15 states.
<br>&nbsp;<br>
Please comment below if you find anything wrong in the above post.
</div>'),
(3,'Which of the following languages is regular?
<a href="http://d18khu5s3lkxd9.cloudfront.net//wp-content/uploads/2014/02/gatecs2007Q33.png"><img src="http://d18khu5s3lkxd9.cloudfront.net//wp-content/uploads/2014/02/gatecs2007Q33.png" alt="gatecs2007Q33" width="500" height="90" class="alignnone size-full wp-image-9914"></a>','A','B','C','D','C',1,0,0,'none','Will be updated'),
(4,'Consider the following Finite State Automaton. The language accepted by this automaton is given by the regular expression

<a href="http://d18khu5s3lkxd9.cloudfront.net//wp-content/uploads/2014/02/GATECS200774.png"><img class="alignnone size-full wp-image-10345" alt="GATECS200774" src="http://d18khu5s3lkxd9.cloudfront.net//wp-content/uploads/2014/02/GATECS200774.png" width="491" height="201"></a>


&nbsp;

<a href="http://d18khu5s3lkxd9.cloudfront.net//wp-content/uploads/2014/02/GATECS200774ans.png"><img class="alignnone  wp-image-10346" alt="GATECS200774ans" src="http://d18khu5s3lkxd9.cloudfront.net//wp-content/uploads/2014/02/GATECS200774ans.png" width="500" height="32"></a>','A','B','C','D','C',2,0,0,'none','<div class="mtq_explanation-label">Question 19 Explanation:&nbsp;</div><div class="mtq_explanation-text"> In this case, we would at least have to reach q1 so that our string gets accepted. So, b* a is the smallest accepted string.
Now, at q1, any string with any number of a`s and b`s would be accepted. So, we append (a + b)* to the smallest accepted string.
<br>&nbsp;<br>
Thus, the string accepted by the FSA is b* a (a + b)*.
<br>&nbsp;<br>
Thus, C is the correct choice.
<br>&nbsp;<br>
Please comment below if you find anything wrong in the above post.</div>'),
(5,'Consider the automata given in <a href="http://geeksquiz.com/gate-gate-cs-2007-question-74/" target="_blank">previous question</a>. The minimum state automaton equivalent to the above FSA has the following number of states','1','2','3','4','B',1,0,0,'none','<div class="mtq_explanation-label">Question 20 Explanation:&nbsp;</div><div class="mtq_explanation-text"> Following is equivalent FSA with 2 states.  
<a href="http://d18khu5s3lkxd9.cloudfront.net//wp-content/uploads/2014/03/GATECS200774Answer.png"><img src="http://d18khu5s3lkxd9.cloudfront.net//wp-content/uploads/2014/03/GATECS200774Answer.png" alt="GATECS200774Answer" width="271" height="127" class="alignnone size-full wp-image-10628"></a></div>'),
(6,'Which one of the following is TRUE?

<a href="http://d18khu5s3lkxd9.cloudfront.net//wp-content/uploads/2014/04/GATECS2014Q25.png"><img src="http://d18khu5s3lkxd9.cloudfront.net//wp-content/uploads/2014/04/GATECS2014Q25.png" alt="GATECS2014Q25" width="600" height="55" class="alignnone size-full wp-image-11154"></a>','A','B','C','D','C',2,0,0,'none','<div class="mtq_explanation-label">Question 21 Explanation:&nbsp;</div><div class="mtq_explanation-text"> Only for C, we can build a FA. </div>'),
(7,'<a href="http://d18khu5s3lkxd9.cloudfront.net//wp-content/uploads/2014/04/GATECS2014Q26.png"><img src="http://d18khu5s3lkxd9.cloudfront.net//wp-content/uploads/2014/04/GATECS2014Q26.png" alt="GATECS2014Q26" width="500" height="200" class="alignnone size-full wp-image-11156"></a>','{q0, q1, q2}','{q0, q1}','{q0, q1, q2, q3}','{q3}','A',1,0,0,'none','Will be updated'),
(8,'Which of the regular expressions given below represent the following DFA?
<a href="http://d18khu5s3lkxd9.cloudfront.net//wp-content/uploads/2014/04/GATECS2014Q45.png"><img src="http://d18khu5s3lkxd9.cloudfront.net//wp-content/uploads/2014/04/GATECS2014Q45.png" alt="GATECS2014Q45" width="291" height="135" class="alignnone size-full wp-image-11256"></a> <pre>I) 0*1(1+00*1)*
II) 0*1*1+11*0*1
III) (0+1)*1 </pre>
','I and II only','I and III only','II and III only','I, II, and III','B',2,0,0,'none','<div class="mtq_explanation-label">Question 23 Explanation:&nbsp;</div><div class="mtq_explanation-text">  <pre>I) 0*1(1+00*1)*
II) 0*1*1+11*0*1
III) (0+1)*1 

(I) and  (III) represent DFA.

(II) doesn`t represent as the DFA accepts strings like 11011,
    but the regular expression doesn`t accept. </pre></div>'),
(9,'<a href="http://d18khu5s3lkxd9.cloudfront.net//wp-content/uploads/2014/04/GATECS2014Q15.png"><img src="http://d18khu5s3lkxd9.cloudfront.net//wp-content/uploads/2014/04/GATECS2014Q15.png" alt="GATECS2014Q15" width="496" height="107" class="alignnone size-full wp-image-11351"></a>

Which one of the following is CORRECT?
','Only (I)','Only (II)','Both (I) and (II) ',' Neither (I) nor (II)','A',1,0,0,'none','Will be updated'),
(10,'<pre>Let L1 = {w ? {0,1}<sup>?</sup> | w has at least as many occurrences
                                  of (110)’s as (011)’s}. 

Let L2 = { ? {0,1}<sup>?</sup> | w has at least as many occurrences
                                 of (000)’s as (111)’s}. </pre>

Which one of the following is TRUE?','L1 is regular but not L2','L2 is regular but not L!','Both L2 and L1 are regular','Neither L1 nor L2 are regular','A',2,0,0,'none','<div class="mtq_explanation-label">Question 25 Explanation:&nbsp;</div><div class="mtq_explanation-text"> <strong>L1 is regular</strong>
let us consider the string 011011011011
In this string, number of occurrences of 011 are 4 but when we see here 110 is also occurred and the number of occurrence of 110 is 3.

Note that if i add a 0 at the last of string we can have same number of occurrences of 011 and 110 so this string is accepted. We can say if the string is ending with 011 so by appending a 0 we can make 110 also.  

Now string2: 110110110110 in this number of occurrences of 110 is 4 and 011 is 3 which already satisfy the condition

So we can observe here that whenever 110 will be there string will be accepted

So with this idea we can build an automata for this. Therefore, it is regular.</div>'),
(11,'The length of the shortest string NOT in the language (over ? = {a, b}) of the following regular
expression is ______________.
<pre>a*b*(ba)*a*</pre>','2','3','4','5','B',1,0,0,'none','<div class="mtq_explanation-label">Question 26 Explanation:&nbsp;</div><div class="mtq_explanation-text"> The string "bab" is the shortest string not acceptable by regular expression.</div>'),
(12,'If s is a string over (0 + 1)* then let  n<sub>0</sub>(s) denote the number of 0’s in s and n<sub>1</sub>(s) the number of 1’s in s. Which one of the following languages is not regular?

<a href="http://d18khu5s3lkxd9.cloudfront.net//wp-content/uploads/2014/08/GATECS2006Q29.png"><img src="http://d18khu5s3lkxd9.cloudfront.net//wp-content/uploads/2014/08/GATECS2006Q29.png" alt="GATECS2006Q29" width="374" height="110" class="alignnone size-full wp-image-13377"></a>7" /&gt;','A','B','C','D','C',2,0,0,'none','<div class="mtq_explanation-label">Question 27 Explanation:&nbsp;</div><div class="mtq_explanation-text"> Languages in option (A) And (D) are finite so both the options are eliminated. 

For option A:
There are finite no. of 3 digit prime numbers. There exists a FA for every finite set. Hence FA is possible.

For option D:
Possible remainders for 7 is 0 to 6, and for 5 its 0 to 4. Using 35 states, FA can be made.

For option B:
We can have 6 states (including 1 reject state)
state 1: difference is 0
state 2: difference is 1 (more 1s)
state 3: difference is 1 (more 0s)
state 4: difference is 2 (more 1s)
state 5: difference is 2 (more 0s)
state 6: reject state for difference &gt;= 3

Suppose the string is 000101
Scan 0 -&gt; state 3
Scan 0 -&gt; state 5
Scan 0 -&gt; reject (since diff. is 3 now)

Similarly if we try for string: 010100, this will be accepted.
</div>'),
(13,'Consider the regular language L = (111 + 11111)*. The minimum number of states in any DFA accepting this languages is:','3','5','8','9','D',1,0,0,'none','Will be updated'),
(14,'Consider the machine M:
<a href="http://d18khu5s3lkxd9.cloudfront.net//wp-content/uploads/2014/09/GATECS2005Q531.bmp"><img src="http://d18khu5s3lkxd9.cloudfront.net//wp-content/uploads/2014/09/GATECS2005Q531.bmp" alt="GATECS2005Q53" width="402" height="155" class="alignnone size-full wp-image-13688"></a>
The language recognized by M is :






','{w ? {a, b}* / every a in w is followed by ex­actly two b`s}','{w ? {a, b}* every a in w is followed by at least two b’}','{w ? {a, b}* w contains the substring `abb`}','{w ? {a, b}* w does not contain `aa` as a substring}','B',2,0,0,'none','<div class="mtq_explanation-label">Question 29 Explanation:&nbsp;</div><div class="mtq_explanation-text"> We can try some sample strings like aba, abbbb, abbbabbb</div>'),
(15,'Let Nf and Np denote the classes of languages accepted by non-deterministic finite automata and non-deterministic push-down automata, respectively. Let Df and Dp denote the classes of languages accepted by deterministic finite automata and deterministic push-down automata, respectively. Which one of the following is TRUE?','Df ? Nf and Dp ? Np','Df ? Nf and Dp = Np','Df = Nf and Dp = Np','Df = Nf and Dp ? Np','D',1,0,0,'none','<div class="mtq_explanation-label">Question 30 Explanation:&nbsp;</div><div class="mtq_explanation-text"> Deterministic pushdown automata can recognize all deterministic context-free languages while nondeterministic ones can recognize all context-free languages. Mainly the former are used in parser design (Source: <a href=" http://en.wikipedia.org/wiki/Pushdown_automaton" target="_blank"> http://en.wikipedia.org/wiki/Pushdown_automaton</a> ). Deterministic context-free languages (DCFL) are a proper subset of context-free languages.


Non-deterministic finite automata and Deterministic finite automata, both accept same set of languages as NFAs can be translated to equivalent DFAs using the subset construction algorithm.

</div>');

