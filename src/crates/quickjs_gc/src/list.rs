pub struct Node<T> {
    prev: Option<Box<Node<T>>>,
    next: Option<Box<Node<T>>>,
    data: T,
}

pub struct List<T> {
    head: Option<Box<Node<T>>>,
    tail: Option<*mut Node<T>>,
}

impl<T> List<T> {
    pub fn new() -> Self {
        List {
            head: None,
            tail: None,
        }
    }

    pub fn push(&mut self, data: T) {
        let new_node = Box::new(Node {
            data: data,
            prev: None,
            next: self.head.take(),
        });

        let raw_node = Box::into_raw(new_node);

        unsafe {
            if let Some(ref mut old_head) = self.head {
                old_head.prev = Some(&mut *raw_node);
            }

            self.head = Some(&mut *raw_node);

            if self.tail.is_none() {
                self.tail = Some(&mut *raw_node);
            }
        }
    }

    pub fn iter(&self) -> Iter<T> {
        Iter {
            next: self.head.as_deref(),
        }
    }
}

pub struct Iter<'a, T> {
    next: Option<&'a Node<T>>,
}

impl<'a, T> Iterator for Iter<'a, T> {
    type Item = &'a T;

    fn next(&mut self) -> Option<Self::Item> {
        self.next.map(|node| {
            self.next = node.next.as_deref();
            &node.data
        })
    }
}
