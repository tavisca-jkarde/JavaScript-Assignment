
function stringConcat()
{
	
	var inputFirststring = document.getElementById("firstinputstring").value;
    var inputSecondstring = document.getElementById("secondinputstring").value;

    var stringFirst = new stringExpression(inputFirststring);
    var secondStrng = new stringExpression(inputSecondstring);
    var s3 = stringFirst.concat(secondStrng);
    document.getElementById("concatstring").value =s3 ;

}

function stringLength()
{
	var inputFirststring = document.getElementById("lengthString").value;

	var stringFirst = new stringExpression(inputFirststring);
	var answer = stringFirst.getLengthvalue();
	document.getElementById("length").value =answer ;
}


function stringSubstring()

{  //debugger;
	var inputFirststring = document.getElementById("substirngvalue").value;
	var startIndex = document.getElementById("startindex").value;
	var endIndex =  document.getElementById("endindex").value;

	var stringFirst = new stringExpression(inputFirststring);
	var answer = stringFirst.getSubString(startIndex,endIndex);
	document.getElementById("getsubstring").value =answer ;

}


function stringCharAt()

{	

	
	var inputFirststring = document.getElementById("stringCharAt").value;
	var index = document.getElementById("textcharValue").value;

	var stringFirst = new stringExpression(inputFirststring);
	var answer = stringFirst.getCharAt(index);
	document.getElementById("getCharAt").value =answer ;

}	


function stringIndexOf()
{
	var inputFirststring = document.getElementById("StringIndexOf").value;
	var stringvalue = 	document.getElementById("stringname").value;

	var stringFirst = new stringExpression(inputFirststring);
	var answer = stringFirst.getIndexOf(stringvalue);

	document.getElementById("getIndexOf").value =answer ;
}

function stringLastIndexOf()
{	
	var inputFirststring = document.getElementById("StringLastIndexOf").value;	
	var stringvalue = 	document.getElementById("findString").value;

	var stringFirst = new stringExpression(inputFirststring);
	var answer = stringFirst.getLastIndexOf(stringvalue);

	document.getElementById("getLastIndexOf").value =answer ;

}


function stringReplace()

{  
	
	var inputFirststring = document.getElementById("stringReplace").value;	
	var substring =  document.getElementById("substringvalue").value;	

	var replacevalue = 	document.getElementById("replacevalue").value;

	var stringFirst = new stringExpression(inputFirststring);

	var answer = stringFirst.getReplace(substring, replacevalue);

	document.getElementById("getreplacevalue").value =answer ;


}

	window.onload =function()
	{
		var clickEventConcat = document.getElementById("btnStringConcat");
		clickEventConcat.onclick = stringConcat;

		var clickEventLength = document.getElementById("btnStringLength");
		clickEventLength.onclick = stringLength;

		var clickEventSubstring = document.getElementById("btnStringSubstring");
		clickEventSubstring.onclick = stringSubstring;

		var clickEventCharAt = document.getElementById("btnStringCharAt");
		clickEventCharAt.onclick = stringCharAt;

		var clickEventIndexOf = document.getElementById("btnStringIndexOf");
		clickEventIndexOf.onclick = stringIndexOf;

		var clickEventLastIndexOf = document.getElementById("btnStringLastIndexOf");
		clickEventLastIndexOf.onclick = stringLastIndexOf;

		var clickEventReplace = document.getElementById("btnStringReplace");
		clickEventReplace.onclick = stringReplace;

		
	}
	



 function stringExpression(str1)
{ 	
	this.val = str1;

	//concat string function
	this.concat = function(str2)	
	{	
		
		return this.val =  this.val + str2.val;

	}
	

	

	// Length function

    this.getLengthvalue = function()
	{
		
		if(this.val!=''|| this.val!=null || this.val !=undefined){
			
			var lenth = 0;

			while(this.val[lenth] != undefined)	
				lenth++;

			return lenth;
		}else{
			return undefined;

		}	
	}

	//SubString Function

	this.getSubString = function(startindex, endindex)
	{
		
		
		var startvalue;
		var length;
		

		if(endindex=='')
		{
			length = this.getLengthvalue();

		}else {

			length = parseInt(endindex);
		}

		if(startindex=='')
		{
			return undefined;


		}else 
		{
			startvalue = parseInt(startindex);

		}


		if (startvalue>length)
		{
			return undefined;

		}

		

		if(this.val!=''|| this.val!=null || this.val !=undefined){
			
			var substr = '';

				for(var i=startvalue ; i<length;i++){
					substr =substr + this.val[i];
				}

			return substr;
		}else{
			return undefined;

		}

	}

	//CarAT function

	this.getCharAt = function(index)
	{

		
		var indexvalue = parseInt(index);

		var lengthValue = this.getLengthvalue();

		if(index==undefined){
			return '';
		}

		if(this.val!=''|| this.val!=null || this.val !=undefined){
			
			var char = '';

				for(var i=0 ; i<lengthValue ;i++)
				{

					if(indexvalue == i)
					{

							return char = this.val[i];

					}
					
				}
				
		}else {

			return '';

		}

		if(char==''){

			return '';
		}


	}

	// IndexOf Function

	this.getIndexOf = function(stringvalue)
	{
		

		s1 = new stringExpression(stringvalue);

		var lenth1 = s1.getLengthvalue()
		var	 lenth2 = this.getLengthvalue();
		var i,j,k ;
		var	answer;
		var flag = false;

		if(this.val!=''|| this.val!=null || this.val !=undefined)
		{
			
			for(i =0 ; i<lenth2; i++ )
			{
				if(this.val[i]==stringvalue[0])
				{
					answer = i;
					k = i;

					 for(j =0 ; j<lenth1;j++ )
						{	
							if(this.val[k]==stringvalue[j])
							{

								k++;
								flag = true;	

							}else{

								flag = false;
								break;
							}
							

						}			
					}



			}		

			if(flag==true){

				return answer;
			}
		
		}else {
			return undefined;

		}
	
	}


	//lastIndextOf function

	this.getLastIndexOf = function(stringvalue)
	{
			
			var	 lenth = this.getLengthvalue();

			for( var i = lenth-1; i >= 0 ;i--)
			{
				if(this.val [i] == stringvalue )

				{
					return i;

				}
			}

			return -1;	

	}


	// Replace Function
	this.getReplace = function(stringFirst, replaceValue)
	{
		
		var index = this.val.indexOf(stringFirst);
        var stringReplaced = "";
        var newString = replaceValue;
        var indexLast = index + stringFirst.length;;
        for (var i = 0; i < index; i++)
            stringReplaced += this.val[i];
        stringReplaced += replaceValue;
        for (var j = indexLast; j < this.getLengthvalue() ; j++)
            stringReplaced += this.val[j];
        return stringReplaced;

	}

}



