function edit_row(no)
{
 document.getElementById("edit_button"+no).style.display="none";
 document.getElementById("save_button"+no).style.display="block";
	
 var title=document.getElementById("title_row"+no);
 var category=document.getElementById("category_row"+no);
 var author=document.getElementById("author_row"+no);
 var date=document.getElementById("date_row"+no);
	
 var title_data=title.innerHTML;
 var category_data=category.innerHTML;
 var author_data=author.innerHTML;
 var date_data=date.innerHTML;
	
 title.innerHTML="<input type='text' id='title_text"+no+"' value='"+title_data+"'>";
 category.innerHTML="<input type='text' id='category_text"+no+"' value='"+category_data+"'>";
 author.innerHTML="<input type='text' id='author_text"+no+"' value='"+author_data+"'>";
 date.innerHTML="<input type='text' id='date_text"+no+"' value='"+date_data+"'>";
}

function save_row(no)
{
 var title_val=document.getElementById("title_text"+no).value;
 var category_val=document.getElementById("category_text"+no).value;
 var author_val=document.getElementById("author_text"+no).value;
 var date_val=document.getElementById("date_text"+no).value;

 document.getElementById("title_row"+no).innerHTML=title_val;
 document.getElementById("category_row"+no).innerHTML=category_val;
 document.getElementById("author_row"+no).innerHTML=author_val;
 document.getElementById("date_row"+no).innerHTML=date_val;

 document.getElementById("edit_button"+no).style.display="block";
 document.getElementById("save_button"+no).style.display="none";
}

function delete_row(no)
{
     if (confirm('Are you sure to delete this record ?')) {
        document.getElementById("row"+no+"").outerHTML="";
    }
}

function add_row()
{
 var new_title=document.getElementById("new_title").value;
 var new_category=document.getElementById("new_category").value;
 var new_author=document.getElementById("new_author").value;
 var new_date=document.getElementById("new_date").value;
	
 var table=document.getElementById("data_table");
 var table_len=(table.rows.length)-1;
 var row = table.insertRow(table_len).outerHTML="<tr id='row"+table_len+"'><td id='title_row"+table_len+"'>"+new_title+"</td><td id='category_row"+table_len+"'>"+new_category+"</td><td id='author_row"+table_len+"'>"+new_author+"</td><td id='date_row"+table_len+"'>"+new_date+"</td><td><input type='button' id='edit_button"+table_len+"' value='Edit' class='edit' onclick='edit_row("+table_len+")'> <input type='button' id='save_button"+table_len+"' value='Save' class='save' onclick='save_row("+table_len+")'> <input type='button' value='Delete' class='delete' onclick='delete_row("+table_len+")'></td></tr>";

 document.getElementById("new_title").value="";
 document.getElementById("new_category").value="";
 document.getElementById("new_author").value="";
 document.getElementById("new_date").value="";
}