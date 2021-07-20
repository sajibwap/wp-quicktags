;(function($){

	tinyMCE.PluginManager.add('tmce_plugin',function(editor,url){

  	/*
  	** Simple button on tinyMCE 
  	**/

  	editor.addButton('tmce_button_one',{
  		text:'Button1',
  		icon:'drop',
  		// image:url + '/../assets/js/img.png',
  		onclick:function(){
  			editor.insertContent('Hello world ');
  		}
  	});

  	/*
  	** Dropdrow button on tinyMCE 
  	**/

  	editor.addButton('tmce_button_two',{
  		type:'listbox',
  		text:'Select an option',
  		values: [
	  		{text:'Apple',value:'You have selected <b>Apple</b>'},
	  		{text:'Banana',value:'You have selected <em>Banana</em>'},
	  		{text:'Mango',value:'You have selected <u>Mango</u>'}
  		],
  		onselect:function(){
  			editor.insertContent(this.value());
  		},
  		onPostRender: function(){
  			this.value('You have selected <u>Mango</u>');
  		}
  	});

  	/*
  	** Multi Level Dropdrow list on tinyMCE 
  	**/

  	editor.addButton('tmce_button_three',{
  		type:'menubutton',
  		text:'Choose',
  		menu: [
  		{	
  			text:'Option A',
  			onclick:function(){editor.insertContent('Option A')}
  		},
  		{
  			text:'Option B',
  			menu:[
  			{	
  				text:'Option B1',
  				onclick:function(){editor.insertContent('Option B1')},
  			},
  			{	
  				text:'Option B2',
  				onclick:function(){editor.insertContent('Option B2')},
  			},
  			{	
  				text:'Option B3',
  				menu:[
  				{	
  					text:'Option B3.1',
  					onclick:function(){editor.insertContent('Option B3.1')},
  				},
  				{	
  					text:'Option B3.2',
  					onclick:function(){editor.insertContent('Option B3.2')},
  				},
  				{	
  					text:'Option B3.3',
  					onclick:function(){editor.insertContent('Option B3.3')}
  				}
  				]
  			}
  			]
  		}
  		]
  	});

  	/*
  	** Userinput on tinyMCE 
  	**/


  	editor.addButton('tmce_button_form',{
  		text:'Form',
  		onclick:function(){
  			editor.windowManager.open({
  				title:'User input form',
  				body:[
  					{
  						type:'textbox',
  						name:'userinput1',
  						label:'Name',
  						value:'Sajib'
  					},
  					{
  						type:'colorpicker',
  						name:'userinput2',
  						label:'Color',
  						value:'#222222'
  					},
  					{
  						type:'listbox',
  						name:'userinput3',
  						label:'Options',
  						values: [
	  						{text:'Apple',value:'You have selected <b>Apple</b>'},
	  						{text:'Banana',value:'You have selected <em>Banana</em>'},
	  						{text:'Mango',value:'You have selected <u>Mango</u>'}
  						]
  					}
  				],
  				onsubmit:function(e){
  					editor.insertContent(e.data.userinput1+e.data.userinput2+e.data.userinput3);
  				}
  			})
  		}
  	});

  });

})(jQuery);