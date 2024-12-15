#include <iostream>
using namespace std;

class Teacher
{
private:
    float salary = 25000;

public:
    // non parameterisezed const
    Teacher()
    {
        cout << "Non Parameterized Const called" << endl;
    }
    // parameterised constr
    Teacher(string n, string d, string s)
    {
        cout << "Parametrised  const called " << endl;
        name = n;
        dept = d;
        subject = s;
    }
    // copy constructor
    Teacher(Teacher &orgobj)
    {
        this->name = orgobj.name;
        this->dept = orgobj.dept;
        this->subject = orgobj.subject;
        this->salary = orgobj.salary;
    }
    string name;
    string dept;
    string subject;

    void changedept(string newdept)
    {
        dept = newdept;
    }
    // setter
    void setSalary(float s)
    {
        salary = s;
    }
    // getter
    float getSalary()
    {
        return salary;
    }
};
int main()
{
    Teacher t1("Gourav", "CSE", "OOPS");

    cout << t1.dept << endl;
    t1.changedept("sports dept");
    cout << t1.dept << endl;
    t1.setSalary(30.5000);
    float newsal = t1.getSalary();
    cout << newsal << endl;

    return 0;
}