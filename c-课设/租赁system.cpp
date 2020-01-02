			#include <stdio.h>
			#include <stdlib.h>
			#include<Windows.h>
			#include<ctype.h>
			#include<string.h>
			#include<conio.h>
			int password(void) ;//密码函数 
			void add(void); //新片上架函数
			int check(void); // CD查询函数
			int rent(void); //CD借阅函数
			int print();
			void useradd(void); //会员添加函数
			int  menu(void); 
			int read(); 
			void delete_tea();
			void returnn (void);// CD归还函数
			int user_number =1000; //定义会员数目		
			int cd_number =1000; //定义CD数目			
			struct cd//CD结构体			
			{
			char film_name[10]; // CD名称 			
			char film_num[10]; //CD编号 			
			char country[10]; //CD国家			
			char type[10]; //CD类型			
			int n; //借阅标记 1有 0无			
			};			
			struct rent//CD借阅结构体			
			{		
			char username[10]; //使用者名			
			char film_name[10][10]; //CD名称			
			char film_num[10];//CD编号 		
			int rent_time; //借出时间		
			int return_time; //归还时间			
			int money; //租			
			};
			
			struct cd CD[1000]; //定义cd数目
			
			struct rent RENT[1000]; //定义出租数目
			
			//-----------------------主函数-------------------------------------
			
			int main () //主函数
			{
			system("color 3E");//桌面背景
			
				printf("            欢 ");
				Sleep(100);
				printf("迎 ");
				Sleep(100);
				printf("使 ");
				Sleep(100);
				printf("用 ");
				Sleep(500);
				printf("C ");
				Sleep(100);
				printf("D ");
				Sleep(100);
				printf("管 ");
				Sleep(100);
				printf("理 ");
				Sleep(100);
				printf("系 ");
				Sleep(100);
				printf("统\n");
				Sleep(100);
				system("color 4A");
				password();
				system("cls");
				system("color 3E");
				menu();
			}	    
		int password() 
			{
	int i = 0;
	int flag=0;
 char p[20];
    char pass[]="101010";
   
    printf("enter your password(请输入密码)\n");
    do
    {
        p[i]=getch();
        if(p[i]=='\r')
            break;
        if(p[i]=='\b')
        {
            if(i==0)
            {
                printf("\a");
                continue;
            }
            i=i-1;
            printf("\b");
        }
        else
        {
            i=i+1;
            printf("*");
        }
    }while(p[i]!='\n' && i<20);
    p[i]='\0';
    printf("\n");
    if(strcmp(p,pass)==0)
        printf("right!\n");
    else
    {
    	printf("密码错误，退出系统!"); 
    	exit(0);
	}
    
//    { flag++;
//    if(flag>2){
//    	exit(0);
//	}
//	else
//    	password();
//	}
          return 0;
	};
		//----------------CD添加函数-----------------------			
			void add(void)//新片上架			
			{
						FILE *a; //文件指针			
			char s;//定义字符
			w:	printf("请输入CD名称：\n");
			scanf("%s",CD[cd_number].film_name);	
			printf("请输入CD编号:\n");	
			scanf("%s",CD[cd_number].film_num);	
			printf("请输入CD国家：\n");			
			scanf("%s",CD[cd_number].country);			
			printf("请输入CD类型：\n");			
			scanf("%s",CD[cd_number].type);
			getchar();//取回车符			
			CD[cd_number].n = 1; //修改借阅标记			
			a = fopen("cd.txt","a");//追加方式打开			
			fwrite(&CD[cd_number], sizeof(struct cd), 1, a);			
			cd_number++;
			printf("是否继续添加？(Y/N)\n");
			scanf("%c",&s);
			getchar();switch(s) //多条件选择
			{
			case 'Y': goto w; //若借，返回w
			case 'N': goto v; //若不借，则退出
			}		
			v:	fclose(a);//关闭a文件	
			system("cls");//清屏
				menu();
			
			}		
			//--------------------CD查询函数------------------------------			
			int check(void)//CD查询			
			{
				int i=0;
				int j=0;
			FILE *a;//文件指针
			char cd_name[10];
			 char cd_num[10];
			system("cls");//清屏
			a=fopen("cd.txt","r"); //只读方式打开文件
			for(i = 0; i < cd_number; i++)
			{
			fread(&CD[i], sizeof(struct cd),1, a);//把a中一个cd结构体赋给CD[i]
			}
			printf("请输入CD名或CD编号：\n");
			scanf("%s",cd_name);
			getchar();//取回车符
			for(j= 0; j< cd_number; j++)			
			{			
			if((strcmp(CD[j].film_name, cd_name))==0||(strcmp(CD[j].film_num, cd_name))==0) //若影片名相同			
			{			
			if(CD[j].n==1) //借阅标记为1		
			{		
			printf("可借阅\n");		
			fclose(a);		
			return 1;	
			}			
			if(CD[j].n==0)//借阅标记为0		
			{			
			printf("已借出\n");		
			fclose(a);		
			return 1;			
			}		
			}		
			}	
			for(i = 0; i < cd_number; i++)			
			{
		
			if((strcmp(CD[i].film_name, cd_name))!=0||(strcmp(CD[i].film_num, cd_name))!=0) //若影片名不同			
			{			
		  		printf("无此片\n");			
				 fclose(a);			
			return 1;		
			}			
			}			
			fclose(a);//关闭a文件			
			return 0; //返回菜单
				menu();
			}			
			//------------会员添加函数---------------------------------			
			void useradd(void)//添加会员			
			{ system("cls");//清屏			
			FILE *a; //文件指针			
			printf("请输入姓名：\n");			
			scanf("%s",RENT[user_number].username);			
			getchar();			
			a = fopen("rent.txt","ab");//追加方式打开			
			fwrite(&RENT[user_number], sizeof(struct rent), 1, a);//把a中一个rent结构体赋给RENT[user_number]			
			printf(" 添加成功 \n");			
			user_number++;			
			fclose(a);	menu();			
			}			
			//-------------CD借阅函数-----------------------------			
			int rent(void) //CD借阅
			{
				int i=0;
				int j=0;	
			 system("cls");//清屏
			char user_name[10];
			char cd_name[10];
			FILE *a;//文件指针
			FILE *b;//文件指针		
			int k=0;		
			char choice;		
			a = fopen("rent.txt","r");//只读方式打开	
			b = fopen("cd.txt","r");//只读方式打开	
			for ( i = 0; i < cd_number; i++)	
			{		
			fread(&CD[i], sizeof(struct cd),1,b);//把b中一个cd结构体赋给CD[i]			
			}		
			for (i = 0; i < user_number; i++)		
			{			
			fread(&RENT[i],sizeof(struct rent),1,a);//把a中一个rent结构体赋给RENT[i]			
			}			
			printf("请输入借阅人：\n");			
			scanf("%s",user_name);			
			getchar();			
			a: printf("请输入CD名：\n");			
			scanf("%s",cd_name);			
			getchar();			
			printf("请再次输入CD名：\n");
			scanf("%s", RENT[i].film_name[k]);			
			k++;			
			getchar();			
			printf("此人已借%d张\n",k);			
			for ( j = 0; j < cd_number; j++)			
			{			
			if((strcmp(CD[j].film_name, cd_name))==0)//如果两个名相同			
			{			
			CD[j].n=0; //修改借阅标记			
			}			
			}			
			printf("请输入借出日期：\n");			
			scanf("%d",&RENT[i].rent_time);			
			getchar();			
			printf("A: 再接一张\n");			
			printf("B: 退出\n");			
			scanf("%c",&choice);			
			getchar();			
			switch(choice)//多条件选择判断			
			{			
			case 'A': goto a;			
			break;			
			case 'B': return 0;			
			}			
			fclose(a);			
			fclose(b);		
			return 0;
				menu();
			}			
			//--------------CD归还函数----------------------------			
			void returnn (void) //CD归还			
			{ system("cls");//清屏			
			char user_name[10];			
			char cd_name[10];			
			FILE *a;	
			FILE *b;	
			int i;		
			int j;			
			int k = 0;			
			char choice;			
			a = fopen("rent.txt","r");//只读方式打开			
			b = fopen("cd.txt","r");//只读方式打开			
			for (i = 0; i < cd_number; i++)			
			{			
			fread(&CD[i], sizeof(struct cd), 1, b);//把b中一个cd结构体赋给CD[i]			
			}			
			for (i = 0; i < user_number; i++)			
			{			
			fread(&RENT[i], sizeof(struct rent), 1, a); //把a中一个rent结构体赋给RENT[i]			
			}			
			printf("请输入借阅人：\n");			
			scanf("%s",user_name);		
			for (i = 0; i < user_number; i++)		
			{		
			if ((strcmp(user_name, RENT[i].username))==0)		
			{			
			a: printf("请输入要归还的CD名： \n");
			scanf("%s",cd_name);
				for (j = 0; j < cd_number; j++)
			
			{			
			if((strcmp(CD[j].film_name, cd_name))==0)			
			{			
			CD[j].n = 1;			
			break;			
			}			
			}		
			}			
			}			
			printf("借出日期：%d\n",RENT[i].rent_time);			
			printf("请输入归还日期：\n");			
			scanf("%d",&RENT[i].return_time);			
			getchar();			
			if (((RENT[i].return_time - RENT[i].rent_time) % 3)==0) //计算租金			
			{			
			//（每三天租金为1 不满三天以三天记）			
			RENT[i].money = (RENT[i].return_time - RENT[i].rent_time) / 3;			
			}			
			else			
			{			
			RENT[i].money = (RENT[i].return_time - RENT[i].rent_time) / 3 + 1;		
			}			
			printf("租金：%d\n",RENT[i].money);			
			printf("A: 再还一张\n");			
			printf("B: 退出\n");			
			scanf("%c",&choice);			
			getchar();			
			switch(choice)			
			{			
			case 'A': goto a;			
			break;			
			case 'B': return;			
			}			
			fclose(a);			
			fclose(b);			
			};
			int print()
{ 
 FILE *fp;  //创建一个文件指针*fp
 char ch;
 fp=fopen("cd.txt","r");   //以只读方式打开文件
 if(fp==NULL)     
  printf("can not open!\n");  //如果fp指针指向为空，即文件为空，则输出can not open
 else{
  //读取字符：fscanf(fp,"%c",&ch)，ch=fgetc(fp); 
  fscanf(fp,"%c",&ch);   //读取字符
  printf("CD名称\tCD编号\tCD国家\tCD类型\t \n");
  while(!feof(fp)){      //feof（）这个函数是用来判断指针是否已经到达文件尾部
 
  putchar(ch);   
  
       //输出
 
  fscanf(fp,"%c",&ch);   //再次读取字符

 
  }
    printf("\n");  
  fclose(fp);   //关闭文件
 
  }
 
 printf("\n");
 menu();
 return 0;
}
int menu(){
			printf("                   ");
			printf("\6");
			Sleep(100);printf("\6");
			Sleep(100);
			printf("\6");
			Sleep(100);
			printf("\6");
			Sleep(100);
			printf("\6");
			Sleep(100);
			printf("欢迎使用CD影片租赁管理系统");
			printf("\6");
			Sleep(100);
			printf("\6");
			Sleep(100);
			printf("\6");
			printf("\6");
			Sleep(100);
			printf("\6");
			Sleep(100);
			printf("\n");
		Sleep(100);
			printf("  ------------------------------------------------------------\n");
			
			Sleep(500);
			
			printf("  |                  →请输入你的指令←                     |\n");
				Sleep(200);
			printf("  |               →A: 新片上架                              |\n");
				Sleep(200);
			printf("  |               →B: CD查询                                |\n");
				Sleep(200);
			printf("  |               →C: CD借阅(非会员不能借阅)                |\n");
				Sleep(200);
			printf("  |               →D: CD归还                                |\n");
				Sleep(200);
			printf("  |               →E: 加入会员                              |\n");
				Sleep(200);
			printf("  |               →F: 退出程序                              |\n");
			Sleep(200);
			printf("  |               →H: 删除数据                              |\n");
			 	Sleep(200);
			printf("  |               →G: 查看目录                              |\n");
			Sleep(200);
		
			printf("  ------------------------------------------------------------\n");
			printf("请输入指令:");
		    char choice; //菜单
			scanf("%s",&choice);
			
			switch(choice) //多条件选择判断
			
			{			
				case 'A':			
			{
				add(); //CD添加函数
					break;
			}
					case 'B':			
			{			
				check(); //CD查询函数	
				
				break;			
			}			
				case 'C':			
			{			
			rent(); //CD借阅函数			
			break;		
			}			
			case 'D':			
			{			
			returnn();//CD归还函数			
			break;		
			}			
			case'E':			
			{
			password();//密码验证 
			useradd();//添加会员函数		
			break;		
			}
				case 'G':		
			{		
				print(); //CD添加函数			      
					break;			
			}
			case 'H':
			{
			  delete_tea();
			  break; }
			case'F':
			{	
			exit(0); //退出程序
			}
			default:
           {
           	 printf("error\n");
            break;
		   }
	}
			return 0;
}

void delete_tea(){   // 删除信息（直接在文件内部操作） 
    FILE *fp,*ft;
    char set[20];
    int index=0;
    printf("请输入要删除的Cd名:");
    scanf("%s",set);
    char key[20];
    fp=fopen("cd.txt","rt+");
    ft=fopen("temp.txt","wt");
    if(fp==NULL || ft==NULL){
        printf("错误！\n");
        return;
    }
    while(fread(key,sizeof(key),1,fp)){
        if(strcmp(key,set)!=0){
           fwrite(key,sizeof(key),1,ft);
           index++;
        }
        else{
            rewind(fp);
            fseek(fp,sizeof(key)*(index+2),0);
        }
    }
        fclose(fp);
        fclose(ft);
        remove("cd.txt");
        rename("temp.txt","cd.txt");
        printf("信息删除成功！\n");
        menu();

}

