			#include <stdio.h>
			#include <stdlib.h>
			#include<Windows.h>
			#include<ctype.h>
			#include<string.h>
			#include<conio.h>
			int password(void) ;//���뺯�� 
			void add(void); //��Ƭ�ϼܺ���
			int check(void); // CD��ѯ����
			int rent(void); //CD���ĺ���
			int print();
			void useradd(void); //��Ա��Ӻ���
			int  menu(void); 
			int read(); 
			void delete_tea();
			void returnn (void);// CD�黹����
			int user_number =1000; //�����Ա��Ŀ		
			int cd_number =1000; //����CD��Ŀ			
			struct cd//CD�ṹ��			
			{
			char film_name[10]; // CD���� 			
			char film_num[10]; //CD��� 			
			char country[10]; //CD����			
			char type[10]; //CD����			
			int n; //���ı�� 1�� 0��			
			};			
			struct rent//CD���Ľṹ��			
			{		
			char username[10]; //ʹ������			
			char film_name[10][10]; //CD����			
			char film_num[10];//CD��� 		
			int rent_time; //���ʱ��		
			int return_time; //�黹ʱ��			
			int money; //��			
			};
			
			struct cd CD[1000]; //����cd��Ŀ
			
			struct rent RENT[1000]; //���������Ŀ
			
			//-----------------------������-------------------------------------
			
			int main () //������
			{
			system("color 3E");//���汳��
			
				printf("            �� ");
				Sleep(100);
				printf("ӭ ");
				Sleep(100);
				printf("ʹ ");
				Sleep(100);
				printf("�� ");
				Sleep(500);
				printf("C ");
				Sleep(100);
				printf("D ");
				Sleep(100);
				printf("�� ");
				Sleep(100);
				printf("�� ");
				Sleep(100);
				printf("ϵ ");
				Sleep(100);
				printf("ͳ\n");
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
   
    printf("enter your password(����������)\n");
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
    	printf("��������˳�ϵͳ!"); 
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
		//----------------CD��Ӻ���-----------------------			
			void add(void)//��Ƭ�ϼ�			
			{
						FILE *a; //�ļ�ָ��			
			char s;//�����ַ�
			w:	printf("������CD���ƣ�\n");
			scanf("%s",CD[cd_number].film_name);	
			printf("������CD���:\n");	
			scanf("%s",CD[cd_number].film_num);	
			printf("������CD���ң�\n");			
			scanf("%s",CD[cd_number].country);			
			printf("������CD���ͣ�\n");			
			scanf("%s",CD[cd_number].type);
			getchar();//ȡ�س���			
			CD[cd_number].n = 1; //�޸Ľ��ı��			
			a = fopen("cd.txt","a");//׷�ӷ�ʽ��			
			fwrite(&CD[cd_number], sizeof(struct cd), 1, a);			
			cd_number++;
			printf("�Ƿ������ӣ�(Y/N)\n");
			scanf("%c",&s);
			getchar();switch(s) //������ѡ��
			{
			case 'Y': goto w; //���裬����w
			case 'N': goto v; //�����裬���˳�
			}		
			v:	fclose(a);//�ر�a�ļ�	
			system("cls");//����
				menu();
			
			}		
			//--------------------CD��ѯ����------------------------------			
			int check(void)//CD��ѯ			
			{
				int i=0;
				int j=0;
			FILE *a;//�ļ�ָ��
			char cd_name[10];
			 char cd_num[10];
			system("cls");//����
			a=fopen("cd.txt","r"); //ֻ����ʽ���ļ�
			for(i = 0; i < cd_number; i++)
			{
			fread(&CD[i], sizeof(struct cd),1, a);//��a��һ��cd�ṹ�帳��CD[i]
			}
			printf("������CD����CD��ţ�\n");
			scanf("%s",cd_name);
			getchar();//ȡ�س���
			for(j= 0; j< cd_number; j++)			
			{			
			if((strcmp(CD[j].film_name, cd_name))==0||(strcmp(CD[j].film_num, cd_name))==0) //��ӰƬ����ͬ			
			{			
			if(CD[j].n==1) //���ı��Ϊ1		
			{		
			printf("�ɽ���\n");		
			fclose(a);		
			return 1;	
			}			
			if(CD[j].n==0)//���ı��Ϊ0		
			{			
			printf("�ѽ��\n");		
			fclose(a);		
			return 1;			
			}		
			}		
			}	
			for(i = 0; i < cd_number; i++)			
			{
		
			if((strcmp(CD[i].film_name, cd_name))!=0||(strcmp(CD[i].film_num, cd_name))!=0) //��ӰƬ����ͬ			
			{			
		  		printf("�޴�Ƭ\n");			
				 fclose(a);			
			return 1;		
			}			
			}			
			fclose(a);//�ر�a�ļ�			
			return 0; //���ز˵�
				menu();
			}			
			//------------��Ա��Ӻ���---------------------------------			
			void useradd(void)//��ӻ�Ա			
			{ system("cls");//����			
			FILE *a; //�ļ�ָ��			
			printf("������������\n");			
			scanf("%s",RENT[user_number].username);			
			getchar();			
			a = fopen("rent.txt","ab");//׷�ӷ�ʽ��			
			fwrite(&RENT[user_number], sizeof(struct rent), 1, a);//��a��һ��rent�ṹ�帳��RENT[user_number]			
			printf(" ��ӳɹ� \n");			
			user_number++;			
			fclose(a);	menu();			
			}			
			//-------------CD���ĺ���-----------------------------			
			int rent(void) //CD����
			{
				int i=0;
				int j=0;	
			 system("cls");//����
			char user_name[10];
			char cd_name[10];
			FILE *a;//�ļ�ָ��
			FILE *b;//�ļ�ָ��		
			int k=0;		
			char choice;		
			a = fopen("rent.txt","r");//ֻ����ʽ��	
			b = fopen("cd.txt","r");//ֻ����ʽ��	
			for ( i = 0; i < cd_number; i++)	
			{		
			fread(&CD[i], sizeof(struct cd),1,b);//��b��һ��cd�ṹ�帳��CD[i]			
			}		
			for (i = 0; i < user_number; i++)		
			{			
			fread(&RENT[i],sizeof(struct rent),1,a);//��a��һ��rent�ṹ�帳��RENT[i]			
			}			
			printf("����������ˣ�\n");			
			scanf("%s",user_name);			
			getchar();			
			a: printf("������CD����\n");			
			scanf("%s",cd_name);			
			getchar();			
			printf("���ٴ�����CD����\n");
			scanf("%s", RENT[i].film_name[k]);			
			k++;			
			getchar();			
			printf("�����ѽ�%d��\n",k);			
			for ( j = 0; j < cd_number; j++)			
			{			
			if((strcmp(CD[j].film_name, cd_name))==0)//�����������ͬ			
			{			
			CD[j].n=0; //�޸Ľ��ı��			
			}			
			}			
			printf("�����������ڣ�\n");			
			scanf("%d",&RENT[i].rent_time);			
			getchar();			
			printf("A: �ٽ�һ��\n");			
			printf("B: �˳�\n");			
			scanf("%c",&choice);			
			getchar();			
			switch(choice)//������ѡ���ж�			
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
			//--------------CD�黹����----------------------------			
			void returnn (void) //CD�黹			
			{ system("cls");//����			
			char user_name[10];			
			char cd_name[10];			
			FILE *a;	
			FILE *b;	
			int i;		
			int j;			
			int k = 0;			
			char choice;			
			a = fopen("rent.txt","r");//ֻ����ʽ��			
			b = fopen("cd.txt","r");//ֻ����ʽ��			
			for (i = 0; i < cd_number; i++)			
			{			
			fread(&CD[i], sizeof(struct cd), 1, b);//��b��һ��cd�ṹ�帳��CD[i]			
			}			
			for (i = 0; i < user_number; i++)			
			{			
			fread(&RENT[i], sizeof(struct rent), 1, a); //��a��һ��rent�ṹ�帳��RENT[i]			
			}			
			printf("����������ˣ�\n");			
			scanf("%s",user_name);		
			for (i = 0; i < user_number; i++)		
			{		
			if ((strcmp(user_name, RENT[i].username))==0)		
			{			
			a: printf("������Ҫ�黹��CD���� \n");
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
			printf("������ڣ�%d\n",RENT[i].rent_time);			
			printf("������黹���ڣ�\n");			
			scanf("%d",&RENT[i].return_time);			
			getchar();			
			if (((RENT[i].return_time - RENT[i].rent_time) % 3)==0) //�������			
			{			
			//��ÿ�������Ϊ1 ��������������ǣ�			
			RENT[i].money = (RENT[i].return_time - RENT[i].rent_time) / 3;			
			}			
			else			
			{			
			RENT[i].money = (RENT[i].return_time - RENT[i].rent_time) / 3 + 1;		
			}			
			printf("���%d\n",RENT[i].money);			
			printf("A: �ٻ�һ��\n");			
			printf("B: �˳�\n");			
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
 FILE *fp;  //����һ���ļ�ָ��*fp
 char ch;
 fp=fopen("cd.txt","r");   //��ֻ����ʽ���ļ�
 if(fp==NULL)     
  printf("can not open!\n");  //���fpָ��ָ��Ϊ�գ����ļ�Ϊ�գ������can not open
 else{
  //��ȡ�ַ���fscanf(fp,"%c",&ch)��ch=fgetc(fp); 
  fscanf(fp,"%c",&ch);   //��ȡ�ַ�
  printf("CD����\tCD���\tCD����\tCD����\t \n");
  while(!feof(fp)){      //feof������������������ж�ָ���Ƿ��Ѿ������ļ�β��
 
  putchar(ch);   
  
       //���
 
  fscanf(fp,"%c",&ch);   //�ٴζ�ȡ�ַ�

 
  }
    printf("\n");  
  fclose(fp);   //�ر��ļ�
 
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
			printf("��ӭʹ��CDӰƬ���޹���ϵͳ");
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
			
			printf("  |                  �����������ָ���                     |\n");
				Sleep(200);
			printf("  |               ��A: ��Ƭ�ϼ�                              |\n");
				Sleep(200);
			printf("  |               ��B: CD��ѯ                                |\n");
				Sleep(200);
			printf("  |               ��C: CD����(�ǻ�Ա���ܽ���)                |\n");
				Sleep(200);
			printf("  |               ��D: CD�黹                                |\n");
				Sleep(200);
			printf("  |               ��E: �����Ա                              |\n");
				Sleep(200);
			printf("  |               ��F: �˳�����                              |\n");
			Sleep(200);
			printf("  |               ��H: ɾ������                              |\n");
			 	Sleep(200);
			printf("  |               ��G: �鿴Ŀ¼                              |\n");
			Sleep(200);
		
			printf("  ------------------------------------------------------------\n");
			printf("������ָ��:");
		    char choice; //�˵�
			scanf("%s",&choice);
			
			switch(choice) //������ѡ���ж�
			
			{			
				case 'A':			
			{
				add(); //CD��Ӻ���
					break;
			}
					case 'B':			
			{			
				check(); //CD��ѯ����	
				
				break;			
			}			
				case 'C':			
			{			
			rent(); //CD���ĺ���			
			break;		
			}			
			case 'D':			
			{			
			returnn();//CD�黹����			
			break;		
			}			
			case'E':			
			{
			password();//������֤ 
			useradd();//��ӻ�Ա����		
			break;		
			}
				case 'G':		
			{		
				print(); //CD��Ӻ���			      
					break;			
			}
			case 'H':
			{
			  delete_tea();
			  break; }
			case'F':
			{	
			exit(0); //�˳�����
			}
			default:
           {
           	 printf("error\n");
            break;
		   }
	}
			return 0;
}

void delete_tea(){   // ɾ����Ϣ��ֱ�����ļ��ڲ������� 
    FILE *fp,*ft;
    char set[20];
    int index=0;
    printf("������Ҫɾ����Cd��:");
    scanf("%s",set);
    char key[20];
    fp=fopen("cd.txt","rt+");
    ft=fopen("temp.txt","wt");
    if(fp==NULL || ft==NULL){
        printf("����\n");
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
        printf("��Ϣɾ���ɹ���\n");
        menu();

}

